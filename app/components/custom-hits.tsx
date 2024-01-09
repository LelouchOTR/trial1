// Import the useHits hook and the UseHitsProps type from react-instantsearch
import { useHits, UseHitsProps } from "react-instantsearch";
// import buildRows from "../modules/build-rows";
import fields_in_node from "../modules/get-field-mapping";
import { EditIcon } from "./EditIcon";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Tab,
  NextUIProvider,
  Button,
  Input,
  Tooltip,
} from "@nextui-org/react";
import buildRowsAndColumns from "../modules/build-rows-and-columns";
import React, { useState, useEffect } from 'react';
// Define a custom component that renders a table of hits
function CustomHits(props: UseHitsProps) {
  const { hits, sendEvent } = useHits(props);

  // Define UseState for adding extra Column. Required, otherwise table is not updated
  const [addColumn1, setaddColumn1] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [editRowID, setEditRowID] = useState(undefined);

  const { rows, columns } = buildRowsAndColumns(hits, addColumn1, editRowID);  // 

  // function to change Value of addColumn when Button is clicked on
  const handleAddColumn = () => {
    setaddColumn1((prevValue) => !prevValue);
  }

  const handleEditRow = (rowID: any) => {
    console.log("rows in EditRow", rows);
    setEditRowID(rowID)
    // setEditRow((prevValue) => !prevValue);
  }

  if (hits.length == 0) {
    console.log("if is working"); 
    // If there are no hits, return a table with a single row of empty values with arbitrary column names
    const hits = [
      {
        ID: "-",
        Age: "-",
        Weight: "-",
        Height: "-",
        Glucose: "-",
        Cholesterol: "-",
        "Plasma Glucose Concentration": "-",
        "Blood Pressure": "-",
        "Body Fat": "-",
        Sex: "-",
        Triglyceride: "-",
        Symptoms: "-",
      },
    ];
    const columns = [];
    const column_array = [
      // Define the arbitrary column names for rendering the empty table
      "ID",
      "Age",
      "Weight",
      "Height",
      "Glucose",
      "Cholesterol",
      "Plasma Glucose Concentration",
      "Blood Pressure",
      "Body Fat",
      "Sex",
      "Triglyceride",
      "Symptoms",
    ];
    for (let i = 0; i < column_array.length; i++) {
      // Build the columns from the column names for NextUI formatting
      columns.push({ key: column_array[i], label: column_array[i] });
    }

    const rows = []; // Build the rows array from the arbitrary hits for NextUI formatting
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

    // Get the hits and the sendEvent function from the useHits hook

    // Return the JSX element that renders the table

    return (
      // Wrap the table inside the NextUIProvider component
      <NextUIProvider>
        {/* Use the Table component from the NextUI library */}
        <Table aria-label="Example table with dynamic content" isStriped>
          <TableHeader columns={columns}>
            {/* Use a function to map each column object to a TableColumn component */}
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              // Use a function to map each row object to a TableRow component
              <TableRow key={item.key}>
                {/* Use a function to map each column key to a TableCell component */}
                {(columnKey) => (
                  // Use the getKeyValue function to get the value from the row object by the column key
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </NextUIProvider>
    );
  } else {

    for (let i = 0; i < rows.length; i++) {
      // console.log("row[i]:", rows[i]); 
      rows[i]["Edit"] = <Tooltip content="Edit user">
        <div className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleEditRow(rows[i].ID)} >
          <EditIcon />
        </div>
      </Tooltip>/* Wert für das "Edit"-Feld, z.B. ein Button, Link oder andere Daten */;
    }

    // If there are hits, build the rows and columns from the hits
    // Return the JSX element that renders the table

    return (
      // Wrap the table inside the NextUIProvider component
      <NextUIProvider>
        <Button className="w-auto ml-4 mt-2 inline-flex" variant="ghost"
          onClick={handleAddColumn} > Add Column </Button>

        {/* Use the Table component from the NextUI library */}
        <Table aria-label="Example table with dynamic content" isStriped>
          <TableHeader columns={columns}>
            {/* Use a function to map each column object to a TableColumn component */}
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              // Use a function to map each row object to a TableRow component
              <TableRow key={item.key}>
                {/* Use a function to map each column key to a TableCell component */}
                {(columnKey) => (
                  // Use the getKeyValue function to get the value from the row object by the column key
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </NextUIProvider>
    );
  }
}

// Export the custom component as the default export
export default CustomHits;