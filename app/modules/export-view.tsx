import * as xlsx from "xlsx";

export default function exportToExcel(json_input) {
  const worksheet1 = xlsx.utils.json_to_sheet(json_input);
  const workbook1 = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook1, worksheet1, "hits");
  xlsx.writeFile(workbook1, "hits.xlsx");
}
