"use server";

const { Client } = require("@elastic/elasticsearch"); // Import the Client class from the @elastic/elasticsearch module
const client = new Client({ node: "http://localhost:9200" }); // Create a new client instance that connects to the local node

/**
 * Uploads formatted data to Elastic using the bulk API
 * @param {string} formatted_data - The formatted data as a JSON string
 * @returns {Promise<void>} - A promise that resolves when the data is uploaded or rejects with an error
 */

export default async function bulkUploadToElastic(formatted_data) {
  const formatted_data_json = JSON.parse(formatted_data); // Parse the JSON string into an object

  console.log("json parsed");

  const exists1 = await client.indices.exists({ index: "temp_index" }); // Check if the temp_index index exists

  if (exists1) {
    // If the index exists
    await client.indices.delete({ index: "temp_index" }); // Delete the index
    console.log("index deleted");
    await client.indices.create(
      {
        // Create a new index with the same name and our required mappings
        index: "temp_index",
        operations: {
          mappings: {
            properties: {
              ID: { type: "integer" },
              Age: { type: "integer" },
              Weight: { type: "integer" },
              Height: { type: "integer" },
              Glucose: { type: "double" },
              Cholesterol: { type: "double" },
              "Blood Pressure": { type: "integer" },
              "Plasma Glucose Concentration": { type: "integer" },
              Sex: { type: "keyword" },
              Triglyceride: { type: "integer" },
              Symptoms: { type: "keyword" },
            },
          },
        },
      },
      { ignore: [400] }
    ); // Ignore 400 errors
    console.log("index created");
  } else {
    // If the index does not exist
    console.log("index does not exist");
    await client.indices.create(
      {
        // Create a new index with the same name and our required mappings
        index: "temp_index",
        operations: {
          mappings: {
            properties: {
              ID: { type: "integer" },
              Age: { type: "integer" },
              Weight: { type: "integer" },
              Height: { type: "integer" },
              Glucose: { type: "double" },
              Cholesterol: { type: "double" },
              "Blood Pressure": { type: "integer" },
              "Plasma Glucose Concentration": { type: "integer" },
              Sex: { type: "keyword" },
              Triglyceride: { type: "integer" },
              Symptoms: { type: "keyword" },
            },
          },
        },
      },
      { ignore: [400] }
    ); // Ignore 400 errors
    console.log("index created");
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
