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
import Client from "@searchkit/api";
import { createContext } from "react";
import { NextRequest, NextResponse } from 'next/server'

const apiConfig = {
  connection: {
    host: "http://localhost:9200",
  },
  search_settings: {
    search_attributes: ["name", "description"],
    result_attributes: ["name", "price", "description", "categories"],
    highlight_attributes: ["name"],
    facet_attributes: [{ attribute: 'price', field: 'price', type: 'numeric' }],
  },
};

const apiClient = Client(apiConfig);



export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json()

  const results = await apiClient.handleRequest(data, {
    getQuery: (query, search_attributes) => {
      return [
        {
          combined_fields: {
            query,
            fields: search_attributes,
          },
        },
      ];
    },
  });

  return NextResponse.json(results)
}
```

### Setup the frontend

Create a new file in ```app``` directory called ```page.tsx``` and add the following code:

```
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
```

### Customize the search

Create/Modify ```search.js``` file in the ```app/pages``` directory to add the following code:

```
import {
    InstantSearch,
    SearchBox,
    Hits,
    RefinementList,
    RangeInput,
    SortBy
} from "react-instantsearch";



export default function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products">
            <SearchBox />
            <RangeInput attribute="price" />



            <Hits hitComponent={Hit} />
        </InstantSearch>
    );
}
```

### Run the app

```npm run dev```

You can now access your app at port 3000. Make sure elasticsearch(/opensearch) is running.

## How to not start from scratch

Clone my branch onto your machine. Navigate to the root folder and run ```npm install``` to update the dependencies. Then run ```npm run dev```

You should now see the search interface on port 3000 and be able to interact with it. 