import * as XLSX from 'xlsx'; // Import xlsx to read Excel files

// Define a function that downloads HTML content from Elasticsearch into an Excel sheet (!!!! JUST AN EMPTY SHEET DONT KNOW WHY !!!!!)
export function exportTableToExcel(tableID: string, filename: string) { //'upload' is table ID (string) & yourFilename = patientdata
  const tableSelect = document.getElementById(tableID);

  if (!tableSelect) {
    console.error(`Table with ID '${tableID}' not found.`);
    return;
  }

  //function converts the table content to an Excel worksheet
  const ws = XLSX.utils.table_to_sheet(tableSelect);
  console.log(ws);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Patientdata');
  XLSX.writeFile(wb, filename);
}

// Export to use in page.tsx
export default exportTableToExcel;


