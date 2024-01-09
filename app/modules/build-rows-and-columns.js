import fields_in_node from "./get-field-mapping";
import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";


export default function buildRowsAndColumns(hits, addColumn, editRowID) {

  const rows = []; // Array to store the rows
  const columns = []; // Array to store the columns 

  console.log("editRowID", editRowID);

  for (let i = 0; i < fields_in_node.length; i++) {
    columns.push({ key: fields_in_node[i], label: fields_in_node[i] })
  }
  columns.push({ key: "Edit", label: "Edit" });

  if (addColumn) {
    columns.push({
      key: "test", label: "test"
    });

  }

  for (let i = 0; i < hits.length; i++) {
    const row = {};
    row.key = i;
    for (let j = 0; j < fields_in_node.length; j++) {
      if (hits[i][fields_in_node[j]] === undefined) {
        row[fields_in_node[j]] = "NA"; 
      }
      else {
        row[fields_in_node[j]] = hits[i][fields_in_node[j]];
      }
      /* if (editRowID) {
        if (row.ID == editRowID) {
          console.log("row nach dem Befüllen", row); 
          for (let j = 0; j < fields_in_node.length; j++) {
            row[fields_in_node[j]] = <Input defaultValue={hits[i][fields_in_node[j]]} ></Input>; // To Do: Warum werden bei Symptoms, Triglyceride, Weight keine Inputs angezeigt?
          }
      }} */
    rows.push(row);
  }

}
return { rows, columns };
}




