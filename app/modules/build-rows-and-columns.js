import fields_in_node from "./get-field-mapping";
import { useHits, useHitsProps } from "react-instantsearch";

export default function buildRowsAndColumns(hits) {
  const rows = []; // Array to store the rows
  const columns = []; // Array to store the columns
  for (let i = 0; i < fields_in_node.length; i++) {
    columns.push({ key: fields_in_node[i], label: fields_in_node[i] });
  }
  //console.log("columns from buildrowsandcolumns: " + columns);
  for (let i = 0; i < hits.length; i++) {
    rows.push({
      key: i,
      ID: hits[i].ID,
      Age: hits[i].Age,
      Weight: hits[i].Weight,
      Height: hits[i].Height,
      Glucose: hits[i].Glucose,
      Cholesterol: hits[i].Cholesterol,
      "Plasma Glucose Concentration": hits[i]["Plasma Glucose Concentration"],
      "Blood Pressure": hits[i]["Blood Pressure"],
      "Body Fat": hits[i]["Body Fat"],
      Sex: hits[i].Sex,
      Triglyceride: hits[i].Triglyceride,
      Symptoms: hits[i].Symptoms,
    });
  }
  //console.log("rows from buildrowsandcolumns: " + rows);
  return { rows, columns };
}
