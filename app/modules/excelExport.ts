import * as XLSX from 'xlsx'; // Import xlsx to read Excel files
import buildRows from './build-rows';
// Define a function that downloads HTML content from Elasticsearch into an Excel sheet (!!!! JUST AN EMPTY SHEET DONT KNOW WHY !!!!!)
export function exportTableToExcel(tableID: string, filename: string) { //'upload' is table ID (string) & yourFilename = patientdata
  var tableSelect = document.getElementById(tableID);

  if (!tableSelect) {
    console.error(`Table with ID '${tableID}' not found.`);
    return;
  }

  //function converts the table content to an Excel worksheet
  var ws = XLSX.utils.aoa_to_sheet([
    ["A1", "A2","A3"],
    ["B1","B2","B3"],       //YOU CAN ENTER AN ARRAY IN TO EXCEL WITH .aoa_to_sheet()
    ["C1","C2","C3"],       //Else .table_to_sheet()
  ]);
  console.log("HIER AUSGABE VON WS"+ws);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Patientdata.xlsx');
  XLSX.writeFile(wb, filename);
}

// Export to use in page.tsx
export default exportTableToExcel;


