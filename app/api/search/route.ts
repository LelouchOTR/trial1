// Import the Client module from @searchkit/api
import Client from "@searchkit/api";
// Import the createContext function from react
import { createContext } from "react";
// Import the NextRequest and NextResponse types from next/server
import { NextRequest, NextResponse } from "next/server";
import fields_in_node from "@/app/modules/get-field-mapping";

// Define the api configuration object
const apiConfig = {
  connection: {
    host: "http://localhost:9200", // Specify the host of the Elasticsearch server
  },
  search_settings: {
    search_attributes: ["ID"], // Specify the attributes to search on
    result_attributes: fields_in_node, // Specify the attributes to return in the results
    highlight_attributes: fields_in_node, // Specify the attributes to highlight in the results
    facet_attributes: [{ attribute: "Age", field: "Age", type: "numeric" }], // Specify the attributes to facet on
  },
};

// Create a client instance using the api configuration
const apiClient = Client(apiConfig);



// Define the default export function that handles the POST request
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json(); // Get the request data as JSON
  // Call the handleRequest method of the client with the data and a custom query function
  const results = await apiClient.handleRequest(data, {
    getQuery: (query, search_attributes) => {
      return [
        {
          multi_match: {
            query: query.toLowerCase(), // Filter the input query to lowercase
            type: "bool_prefix", // Allows the query to match on a prefix of the input query
            analyzer: "keyword", // Use the keyword analyzer to match on the entire input query
          },
        },
      ];
    },
  });
  // console.log(results);

  // Return the results as JSON
  return NextResponse.json(results);
}
