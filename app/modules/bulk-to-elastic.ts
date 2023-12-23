"use server";

import { get } from "http";

const { Client } = require("@elastic/elasticsearch"); // Import the Client class from the @elastic/elasticsearch module
const client = new Client({ node: "http://localhost:9200" }); // Create a new client instance that connects to the local node

/**
 * Uploads formatted data to Elastic using the bulk API
 * @param {string} formatted_data - The formatted data as a JSON string
 * @returns {Promise<void>} - A promise that resolves when the data is uploaded or rejects with an error
 */

const mapping = {
  settings: {
    analysis: {
      analyzer: {
        custom_edge_ngram_analyzer: {
          // Create a custom ngram analyzer to tokenize the IDs
          type: "custom",
          tokenizer: "custom_edge_ngram_tokenizer",
          filter: ["lowercase"], // Filter the tokens to lowercase
        },
        autocomplete_search: {
          tokenizer: "lowercase",
        },
      },
      tokenizer: {
        custom_edge_ngram_tokenizer: {
          // Tokenize the IDs into substrings of length 1 to 8
          type: "edge_ngram",
          min_gram: 1,
          max_gram: 8,
          token_chars: ["letter", "digit"],
        },
      },
    },
  },
  mappings: {
    dynamic_templates: [
      // Dynamic templates allow you to define custom mappings that can be applied to dynamically added fields based on:
      {
        ID_as_text: {
          // The IDs are stored as text to allow for partial matching while searching
          path_match: "M*",
          match_mapping_type: "text",
          mapping: {
            type: "text",
          },
        },
      },
      {
        integer_fields: {
          path_match: "*", // The integer fields are stored as integers to allow for range queries
          match_mapping_type: "long",
          mapping: {
            type: "long",
          },
        },
      },
    ],
    properties: {
      // Define the properties of the index; taken directly from the documentation
      details: {
        type: "object",
      },
    },
  },
};

async function createIndex() {
  await client.indices.create(
    {
      // Create a new index with the same name and our required mappings
      index: "temp_index",
      body: mapping,
    },
    { ignore: [400] }
  ); // Ignore 400 errors
}

export default async function bulkUploadToElastic(formatted_data) {
  const formatted_data_json = JSON.parse(formatted_data); // Parse the JSON string into an object
  console.log("JSON parsed");

  const check_if_temp_index_exists = await client.indices.exists({
    index: "temp_index",
  }); // Check if the temp_index index exists

  if (check_if_temp_index_exists) {
    // If the index exists
    await client.indices.delete({ index: "temp_index" }); // Delete the preexisiting temporary index
    createIndex(); // Create a new temporary index
    console.log("Index created");
  } else {
    // If the index does not exist
    console.log("Index does not exist");
    createIndex(); // Create a new temporary index after deleting the preexisting index
    console.log("Index created");
  }

  const bulkResponse = await client.bulk({
    refresh: true,
    body: formatted_data_json,
  }); // Bulk push the data to the elasticsearch node

  if (bulkResponse.errors) {
    // If there are any errors in the bulk response
    const erroredDocuments = []; // Get the operation name (index, update, delete, etc.)
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      // Loop through the items array
      const operation = Object.keys(action)[0]; // Get the operation name (index, update, delete, etc.)
      if (action[operation].error) {
        // If the operation has an error
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status, // The HTTP status code of the error
          error: action[operation].error, // The error object
          operation: formatted_data_json[i * 2], // The operation object
          document: formatted_data_json[i * 2 + 1], // The document object
        });
      }
    });
    console.log("erroredDocuments: ", erroredDocuments); // Log the errored documents
  }

  const count = await client.count({ index: "temp_index" }); // Get the document count of the index
  console.log("count: ", count); // Log the count
}
