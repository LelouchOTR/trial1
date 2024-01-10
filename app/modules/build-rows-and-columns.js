import fields_in_node from "./get-field-mapping";
import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";


export default function buildRowsAndColumns(hits, addColumn, editRowID, editRow) {

  const rows = []; // Array to store the rows
  const columns = []; // Array to store the columns 


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
    }
  // checks if there editRowID is defined and put <Input> instead of the data as entry
    if (editRowID && row.ID == editRowID) {
      for (const field in row) { 
        console.log("fields", field);
        row[field] = <Input defaultValue={row[field]} />;
      }
      if (addColumn) {
        row['newColumn'] = <Input />;
      }
    }
    rows.push(row);
  }

  for (let i = 0; i < fields_in_node.length; i++) {
    columns.push({ key: fields_in_node[i], label: fields_in_node[i] })
  }

  
  if (addColumn) {
    columns.push({
      key: "newColumn", label: "newColumn"
    });
  }
// If editRow is true, the name of the newColumn can be changed
  if (editRow) {
    columns.forEach((column) => {
      if (column.key === 'newColumn') {
        column.label = <Input></Input>;
      }
    });
  }

  columns.push({ key: "Edit", label: "Edit" });


  return { rows, columns };
}
