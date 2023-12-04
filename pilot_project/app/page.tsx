"use client"

import { InstantSearch, SearchBox, Hits, RefinementList, RangeInput, SortBy } from "react-instantsearch";
import React, { Fragment, createContext } from "react";
import createClient from "@searchkit/instantsearch-client";
//import Hit from "./components/Hit";
import Head from "next/head";
import * as xlsx from "xlsx";

const searchClient = createClient({
  url: "/api/search"
});

const hitView = ({ hit }) => {
  return (
    <div>
      <h2>{hit.name}</h2>
      <p>{hit.price}</p>
      <p>{hit.description}</p>
      <br />
    </div>
  )
}

const readUploadFile = (e) => {
  e.preventDefault();
  if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
  }
}

export default function Search() {
  return (
    <>
    <form>
        <label htmlFor="upload">Upload File</label>
        <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
        />
      </form>
      <InstantSearch
        searchClient={searchClient}
        indexName="products"
      >
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css" />
        </Head>
        <SearchBox />

        <RefinementList attribute='free_shipping' />
        <div> Price </div>
        <RangeInput attribute="price" />
        <Hits hitComponent={hitView} />

      </InstantSearch>
      
    </>
  );
}