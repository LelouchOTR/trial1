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

import React, {
  Fragment,
  createContext,
  useState,
  useRef,
  useEffect,
} from "react";
import createClient from "@searchkit/instantsearch-client"; // Import the searchkit client module

import Head from "next/head"; // Import the Head component from next.js
import readUploadFile from "./modules/on-file-upload"; // Import the function to read the uploaded file into a JSON object
import CustomHits from "./components/custom-hits"; // Import the custom hits component to render the hit data in a table
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, NextUIProvider } from "@nextui-org/react";

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
  function handleReset(e: any) {
    // Create a function to clear the input element when the reset button is clicked
    e.preventDefault();

    if (inputFile.current) {
      // Clear input element if reset button is clicked
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  }

  const router = useRouter();
  const handleRefresh = () => {
    router.refresh(); // Refresh the page when the load button is clicked
  };

  return (
    <>
      <NextUIProvider>
        <form>
          {/* Create a form element */}
          <label htmlFor="upload" className="hidden">
            Upload File
          </label>

          {/* Create a label for the file input */}
          <input
            type="file" // Specify the input type as file
            name="upload" // Specify the input name as upload
            id="upload" // Specify the input id as upload
            ref={inputFile}
            onChange={readUploadFile} // Specify the onChange handler as the readUploadFile function
            className="inline-flex w-auto mt-2 mb-2 px-4 pt-3 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
          />
        </form>
        

        <Button // Button to refresh the data in the displayed table, currently not working
          className="w-auto ml-4 mt-2 inline-flex"
          variant="ghost"
          onClick={() => {
            handleRefresh();
          }}
        >
          Refresh View
        </Button>

        <Button // Button to reset the input element
          className="w-auto ml-2 mt-2 inline-flex"
          variant="ghost"
          onClick={(e) => {
            handleReset(e);
          }}
        >
          Reset Input
        </Button>

        <InstantSearch // Create an InstantSearch component
          searchClient={searchClient} // Pass the search client as a prop
          indexName="temp_index" // Pass the index name as a prop
        >
          <Head>
            {" "}
            {/*Create a Head component*/}
            <link
              rel="stylesheet"
            // href="https://cdn.jsdelivr.net/npm/instantsearch.css@8.1.0/themes/satellite.css" // Link to the instantsearch.css stylesheet
            />
          </Head>

          <SearchBox
            placeholder="Search IDs"
            autoFocus
            classNames={{
              root: "p-4 shadow-sm",
              form: "",
              input:
                "inline-flex w-auto pl-9 pr-3 py-2 bg-transparent border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1",
              submit:
                "inline-flex w-auto py-3 px-5 ml-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
              loadingIcon: "inline-flex items-center",
            }}
          />

          {/* <RefinementList
          attribute="free_shipping" // Create a RefinementList component for the free_shipping attribute
        /> */}

          <label
            id="Age"
            className="relative text-sm text-gray-500 dark:text-gray-400 vertical-align:middle duration-300 transform -translate-y-4 scale-75 bg-white dark:bg-gray-900 ml-4 peer-focus:px-2 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Age
          </label>


          <RangeInput
            id="Age"
            attribute="Age" // Create a RangeInput component for the price attribute
            precision={2} // Specify the precision
            classNames={{
              root: "pl-3 shadow-sm inline-flex",
              form: "relative",
              input:
                "w-auto text-center pl-3 pr-0 py-2 bg-transparent border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1",
              separator: "text-slate-500 px-2 text-center",
              submit:
                "py-2.5 px-5 ml-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
            }}
          ></RangeInput>
          <CustomHits
            hitComponent={hitView} // Create a Hits component with the custom hit component
          />

          <Pagination // Create a Pagination component
            classNames={{
              root: "flex w-auto justify-center py-5",
              list: "flex gap-0 justify-center",
              item: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
              selectedItem:
                "flex items-center justify-center px-3 h-8 text-slate-600 border border-gray-300 bg-sky-100 hover:bg-slate-100 hover:text-sky-700 dark:border-gray-700 dark:bg-sky-700 dark:text-white",
              firstPageItem: "p-3 shadow-sm",
              lastPageItem: "p-3 shadow-sm",
              pageItem: "p-3 shadow-sm",
              previousPageItem: "p-0 shadow-sm",
              nextPageItem: "p-0 shadow-sm",
            }}
          />
        </InstantSearch>



      </NextUIProvider>
    </>
  );
}
