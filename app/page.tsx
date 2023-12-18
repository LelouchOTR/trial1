"use client"; // Use client-side rendering

// Import the necessary modules from react-instantsearch and react
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  RangeInput,
  SortBy,
  Pagination,
} from "react-instantsearch";
import React, { Fragment, createContext, useState } from "react";
import createClient from "@searchkit/instantsearch-client"; // Import the searchkit client module

import Head from "next/head"; // Import the Head component from next.js
import readUploadFile from "./modules/on-file-upload"; // Import the function to read the uploaded file into a JSON object
import CustomHits from "./components/custom-hits"; // Import the custom hits component to render the hit data in a table

import { useRef } from "react"; // Import the useRef hook from react to create a reference to the input element

import { ResetInputButton } from "./components/reset-input-button"; // Import the ResetInputButton component

// import { Button, ButtonGroup } from "@nextui-org/react";
// import Hit from "./components/Hit";
// import * as opensearch from '@opensearch-project/opensearch'; // Import the opensearch module
// const { searchClient } = require('@opensearch-project/opensearch');

// Create a search client using the searchkit client module
const searchClient = createClient({
  url: "/api/search", // Specify the API endpoint for the search
});

// Define the custom hit component
const hitView = ({ hit }: { hit: any }) => {};

// Define the default export function that returns the search component
export default function Search() {
  const inputFile = useRef(null);

  // Function to reset the input element
  function handleReset(e) {
    // Create a function to clear the input element when the reset button is clicked
    e.preventDefault();
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  }

  return (
    <>
      <form>
        {" "}
        {/* Create a form element */}
        <label htmlFor="upload">Upload File</label>{" "}
        {/* Create a label for the file input */}
        <input
          type="file" // Specify the input type as file
          name="upload" // Specify the input name as upload
          id="upload" // Specify the input id as upload
          ref={inputFile}
          onChange={readUploadFile} // Specify the onChange handler as the readUploadFile function
        />
        <button // Create a button to reset the input
          style={ResetInputButton}
          onClick={(e) => {
            handleReset(e);
          }}
        >
          Reset Input
        </button>
      </form>

      <InstantSearch // Create an InstantSearch component
        searchClient={searchClient} // Pass the search client as a prop
        indexName="products" // Pass the index name as a prop
      >
        <Head>
          {" "}
          {/*Create a Head component*/}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css" // Link to the instantsearch.css stylesheet
          />
        </Head>
        <SearchBox
          placeholder="Search IDs"
          autoFocus // Create a SearchBox component
        />

        <RefinementList
          attribute="free_shipping" // Create a RefinementList component for the free_shipping attribute
        />
        <div> Age {/*Create a div element for the price label*/} </div>
        <RangeInput
          attribute="price" // Create a RangeInput component for the price attribute
        />

        <CustomHits
          hitComponent={hitView} // Create a Hits component with the custom hit component
        />

<<<<<<< Updated upstream
        <Pagination // Create a Pagination component
=======
        <Pagination
          className="pagination" // Create a Pagination component
>>>>>>> Stashed changes
        />
      </InstantSearch>
    </>
  );
}
