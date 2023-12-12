// Import the Client module from @searchkit/api
import Client from "@searchkit/api";
// Import the createContext function from react
import { createContext } from "react";
// Import the NextRequest and NextResponse types from next/server
import { NextRequest, NextResponse } from 'next/server'

// Define the api configuration object
const apiConfig = {
  connection: {
    host: "http://localhost:9200" // Specify the host of the Elasticsearch server
  },
  search_settings: {
    search_attributes: ["name", "description"], // Specify the attributes to search on
    result_attributes: ["name", "price", "description", "categories"], // Specify the attributes to return in the results
    highlight_attributes: ["name", "price"], // Specify the attributes to highlight in the results
    facet_attributes: [{ attribute: 'price', field: 'price.keyword', type: 'numeric' }], // Specify the attributes to facet on
  },
};

// Create a client instance using the api configuration
const apiClient = Client(apiConfig);

// Define the default export function that handles the POST request
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json() // Get the request data as JSON

  // Call the handleRequest method of the client with the data and a custom query function
  const results = await apiClient.handleRequest(data, {
    getQuery: (query, search_attributes) => {
      return [
        {
          combined_fields: { // Use the combined_fields query type
            query, // Pass the query string
            fields: search_attributes, // Pass the search attributes
          },
        },
      ];
    },
  });

  return NextResponse.json(results) // Return the results as JSON
}
