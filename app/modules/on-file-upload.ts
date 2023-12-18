import * as xlsx from "xlsx"; // Import xlsx to read Excel files
import bulkUploadToElastic from "./bulk-to-elastic";

/**
 * Reads the uploaded file and converts it to JSON
 * @param {Event} e - The file upload event
 * @returns {Promise<void>} - A promise that resolves when the file is read and uploaded to Elastic
 */

// Define a function that reads the uploaded file and converts it to JSON
async function readUploadFile(e) {
  e.preventDefault(); // Prevent the default behavior of the event
  if (e.target.files) {
    // Check if there are any files selected
    const reader = new FileReader(); // Create a file reader object
    reader.onload = (e) => {
      // Define a callback function when the file is loaded
      const data = e.target.result; // Get the file data
      const workbook = xlsx.read(data, { type: "array" }); // Read the data as an array of bytes
      const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet
      const worksheet = workbook.Sheets[sheetName]; // Get the worksheet object
      const json1 = xlsx.utils.sheet_to_json(worksheet); // Convert the worksheet to JSON

      const operations = json1.flatMap((doc) => [
        { index: { _index: "temp_index" } },
        doc,
      ]); // Create an array of index and document pairs for bulk upload

      const operationsStr = JSON.stringify(operations); // Convert the array to a string

      bulkUploadToElastic(operationsStr); // Send the string to the function which will upload the data to Elasticsearch
    };
    reader.readAsArrayBuffer(e.target.files[0]); // Read the file as an array buffer
  }
}

export default readUploadFile;
