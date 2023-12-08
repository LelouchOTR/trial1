## Prerequisites

Make sure Node.js and npm are installed and configured correctly. 

Make sure you have the data from the sample data file present in the ```bulk.json``` file imported into elasticsearch(/opensearch). You will find the file in the ```simple_search_interface``` branch's root directory. You can bulk import data into elasticsearch using: 

```
curl -X PUT "localhost:9200/productdata/_bulk?pretty" -H 'Content-Type: application/x-ndjson' --data-binary "@\path\to\bulk.json"
```

## How to start from scratch

The tutorial I followed can be found by following this link: https://www.searchkit.co/docs/tutorials/with-nextjs

### Get the Next.js framework running

Install the Next.js React framework globally

```npm i -g create-next-app```

Navigate to the folder 2023-6a and create a Next.js app

```npx create-next-app pilot_projekt```

Navigate to the app folder

```cd pilot_projekt```

Install the necessary dependencies

```npm install @searchkit/instantsearch-client @searchkit/api react-instantsearch xlsx```

### Setup the Node API

Create a new file in ```app/api/search``` directory and call it ```route.ts```. Copy the code and paste it into yours.

```
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
    highlight_attributes: ["name"], // Specify the attributes to highlight in the results
    facet_attributes: [{ attribute: 'price', field: 'price', type: 'numeric' }], // Specify the attributes to facet on
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
```

### Setup the frontend

Create a new file in ```app``` directory called ```page.tsx``` and add the following code:

```
"use client" // Use client-side rendering

// Import the necessary modules from react-instantsearch and react
import { InstantSearch, SearchBox, Hits, RefinementList, RangeInput, SortBy } from "react-instantsearch";
import React, { Fragment, createContext } from "react";
import createClient from "@searchkit/instantsearch-client"; // Import the searchkit client module
import Head from "next/head"; // Import the Head component from next.js
import * as xlsx from "xlsx"; // Import the xlsx module for reading and writing Excel files

// Create a search client using the searchkit client module
const searchClient = createClient({
  url: "/api/search" // Specify the API endpoint for the search
});

// Define a custom hit component that renders the hit data
const hitView = ({ hit }: { hit: any }) => {
  return (
    <div>
      <h2>{/* Display the name of the product */}{hit.name}</h2>
      <p>{/* Display the price of the product */}{hit.price}</p>
      <p>{/* Display the description of the product */}{hit.description}</p>
      <br />
    </div>
  )
}

// Define a function that reads the uploaded file and converts it to JSON
const readUploadFile = (e) => {
  e.preventDefault(); // Prevent the default behavior of the event
  if (e.target.files) { // Check if there are any files selected
    const reader = new FileReader(); // Create a file reader object
    reader.onload = (e) => { // Define a callback function when the file is loaded
      const data = e.target.result; // Get the file data
      const workbook = xlsx.read(data, { type: "array" }); // Read the data as an array of bytes
      const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet
      const worksheet = workbook.Sheets[sheetName]; // Get the worksheet object
      const json = xlsx.utils.sheet_to_json(worksheet); // Convert the worksheet to JSON
      console.log(json); // Log the JSON data to the console
    };
    reader.readAsArrayBuffer(e.target.files[0]); // Read the file as an array buffer
  }
}

// Define the default export function that returns the search component
export default function Search() {
  return (
    <>
      <form> {/* Create a form element */}
        <label htmlFor="upload">Upload File</label> {/* Create a label for the file input */}
        <input
          type="file" // Specify the input type as file
          name="upload" // Specify the input name as upload
          id="upload" // Specify the input id as upload
          onChange={readUploadFile} // Specify the onChange handler as the readUploadFile function
        />
      </form>
      <InstantSearch // Create an InstantSearch component
        searchClient={searchClient} // Pass the search client as a prop
        indexName="products" // Pass the index name as a prop
      >
        <Head> {/*Create a Head component*/}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css" // Link to the instantsearch.css stylesheet 
          />

        </Head>
        <SearchBox // Create a SearchBox component
        />

        <RefinementList attribute='free_shipping' // Create a RefinementList component for the free_shipping attribute 
        />
        <div> Price {/*Create a div element for the price label*/} </div>
        <RangeInput attribute="price" // Create a RangeInput component for the price attribute 
        />
        <Hits hitComponent={hitView} // Create a Hits component with the custom hit component 
        />

      </InstantSearch>

    </>
  );
}
```

### Customize the search

Create/Modify ```search.js``` file in the ```app/pages``` directory to add the following code:

```
// Import the necessary modules from react-instantsearch
import {
    InstantSearch, // A component that provides the instant search experience
    SearchBox, // A component that displays a search box with a query
    Hits, // A component that displays the list of hits matching the query
    RefinementList, // A component that displays a list of values for a specific attribute
    RangeInput, // A component that displays a range input for a numeric attribute
    SortBy // A component that displays a list of indices to sort the results
} from "react-instantsearch";

// Define the default export function that returns the search component
export default function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products"> // Create an InstantSearch component with the search client and the index name as props
            <SearchBox /> // Create a SearchBox component
            <RangeInput attribute="price" /> // Create a RangeInput component for the price attribute
            <RefinementList attribute="category" /> // Create a RefinementList component for the category attribute
            <SortBy defaultRefinement="products" items={[ // Create a SortBy component with the default and the available indices as props
                { value: 'products', label: 'Relevance' },
                { value: 'products_price_asc', label: 'Lowest Price' },
                { value: 'products_price_desc', label: 'Highest Price' }
            ]}/>
            <Hits hitComponent={Hit} /> // Create a Hits component with a custom hit component as a prop
        </InstantSearch>
    );
}
```

### Run the app

```npm run dev```

You can now access your app at port 3000. Make sure elasticsearch(/opensearch) is running.

## How to not start from scratch

Clone my branch onto your machine. Navigate to the root folder of the app and run ```npm install``` to update the dependencies. Then run ```npm run dev```

You should now see the search interface on port 3000 and be able to interact with it. 