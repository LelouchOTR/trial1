//"use server";

import * as xlsx from "xlsx"; // Import xlsx to read Excel files
//import Link from "next/link"; // Import Link from next/link
import run from "./bulk-to-elastic";
//import Client from "@elastic/elasticsearch";

//const { Client } = require('@elastic/elasticsearch')
//const async_hooks = eval("typeof window === 'undefined' && require('async_hooks')");

//if (async_hooks) {
//    const client = new Client({ node: 'http://localhost:9200' })
//}

// put readUploadFile in a separate file, parse into operations object, then upload to elastic.

// Define a function that reads the uploaded file and converts it to JSON
async function readUploadFile(e) {
    e.preventDefault(); // Prevent the default behavior of the event
    if (e.target.files) { // Check if there are any files selected
      const reader = new FileReader(); // Create a file reader object
      reader.onload = (e) => { // Define a callback function when the file is loaded
        const data = e.target.result; // Get the file data
        const workbook = xlsx.read(data, { type: "array" }); // Read the data as an array of bytes
        const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet
        const worksheet = workbook.Sheets[sheetName]; // Get the worksheet object
        const json1 = xlsx.utils.sheet_to_json(worksheet); // Convert the worksheet to JSON
        console.log(json1); // Log the JSON data to the console
        const operations = json1.flatMap(doc => [{index: {_index: 'products2'}}, doc]);
        console.log(operations);
        //return operations;

        run();

        //<Link href={{pathname: '/pilot_project/app/pages/search.js', query: operations}}></Link>;
        //const bulkResponse = await searchClient.bulk({ refresh: true, operations })
      };
      reader.readAsArrayBuffer(e.target.files[0]); // Read the file as an array buffer
  
      
  
    }
    
  }

export default readUploadFile;