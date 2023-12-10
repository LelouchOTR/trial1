"use client" // Use client-side rendering

// Import the necessary modules from react-instantsearch and react
import { InstantSearch, SearchBox, Hits, RefinementList, RangeInput, SortBy } from "react-instantsearch";
import React, { Fragment, createContext } from "react";
import createClient from "@searchkit/instantsearch-client"; // Import the searchkit client module
//import Hit from "./components/Hit";
import Head from "next/head"; // Import the Head component from next.js
import * as xlsx from "xlsx"; // Import the xlsx module for reading and writing Excel files

import readUploadFile from "./components/on-file-upload";

// import * as opensearch from '@opensearch-project/opensearch'; // Import the opensearch module
// const { searchClient } = require('@opensearch-project/opensearch');

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
