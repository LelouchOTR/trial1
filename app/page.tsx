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

import  {useRef}  from "react"; // Import the useRef hook from react to create a reference to the input element

import  {ResetInputButton}  from "./components/reset-input-button"; // Import the ResetInputButton component

import exportTableToExcel from "./modules/excelExport"; // Import the exportTableToExcel function from excelExport.ts

// Create a search client using the searchkit client module
const searchClient = createClient({
  url: "/api/search", // Specify the API endpoint for the search
});

// Define the custom hit component
const hitView = ({ hit }: { hit: any }) => {
  // Your hitView component code here...
};

// The main Search component
export default function Search() {

    // Create a reference to the input element
    const inputFile = useRef(null);

  // Function to reset the input element
function handleReset(e) {
  e.preventDefault();
  if (inputFile.current) {
    inputFile.current.value = "";
    inputFile.current.type = "text";
    inputFile.current.type = "file";
  }
}

// Function to trigger exportTableToExcel
function handleDownload() {
  // Specify your table ID and filename
  exportTableToExcel('upload', 'patientdata.xlsx');
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
          style={ResetInputButton} // Assuming you have ResetInputButton style defined
          onClick={(e) => handleReset(e)}
        >
          Reset Input
        </button>

        
        <button // Create a button to download table content in an Excel file
        style={ResetInputButton} // Assuming you have ResetInputButton style defined
        onClick={handleDownload}>Download Excel</button> 
      </form>

      <InstantSearch
        searchClient={searchClient}
        indexName="temp_index"
      >
        <Head>
          {/* Create a Head component */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"
          />
        </Head>
        <SearchBox
          placeholder="Search IDs"
          autoFocus // Create a SearchBox component
        />

        <RefinementList attribute="free_shipping" />
        <div> Age </div>
        <RangeInput attribute="Age" />
        <CustomHits hitComponent={hitView} />
        <Pagination className="pagination" />
      </InstantSearch>
    </>
  );
}