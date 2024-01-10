// Import the xlsx library
import * as xlsx from "xlsx";

// Define a function to export JSON data to an Excel file
export default function exportToExcel(json_input) {
  // Convert the JSON data to a worksheet
  const worksheet1 = xlsx.utils.json_to_sheet(json_input);
  // Create a new workbook
  const workbook1 = xlsx.utils.book_new();
  // Append the worksheet to the workbook with the name "hits"
  xlsx.utils.book_append_sheet(workbook1, worksheet1, "hits");
  // Write the workbook to a file named "hits.xlsx"
  xlsx.writeFile(workbook1, "hits.xlsx");
}
