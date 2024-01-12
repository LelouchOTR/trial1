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
import React, { useState, useEffect } from "react";
// Define a custom component that renders a table of hits
function CustomHits(props: UseHitsProps) {
  const { hits } = useHits(props);

  // Define UseState for adding extra Column. Required, otherwise table is not updated
  const [addColumn1, setaddColumn1] = useState(false); // useState is a react function. When an useState const is changed, the table is rerendered.
  const [editRow, setEditRow] = useState(false);
  const [editRowID, setEditRowID] = useState(undefined);

  const { rows, columns } = buildRowsAndColumns(
    hits,
    addColumn1,
    editRowID,
    editRow
  );

  // function to change Value of addColumn when Button is clicked on
  const handleAddColumn = () => {
    setaddColumn1((prevValue) => !prevValue);
  };

  // function to change value of editRowID
  const handleEditRow = (rowID: any) => {
    setEditRowID(rowID); // set editRowID == rowID
    setEditRow((prevValue) => !prevValue);
  };

  if (hits.length == 0) {
    // If there are no hits, return a table with a single row of empty values with arbitrary column names
    return (
      <NextUIProvider>
        <div
          role="status"
          className="max-w p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </NextUIProvider>
    );
  } else {
    for (let i = 0; i < rows.length; i++) {
      // Put the edit Button in every row
      rows[i]["Edit"] = (
        <Tooltip content="Edit">
          <div
            className="text-lg text-default-400 cursor-pointer active:opacity-50"
            onClick={() => handleEditRow(rows[i].ID)}
          >
            <EditIcon />
          </div>
        </Tooltip>
      );
    }

    // If there are hits, build the rows and columns from the hits
    // Return the JSX element that renders the table

    return (
      // Wrap the table inside the NextUIProvider component
      <NextUIProvider>
        <Button
          className="w-auto ml-4 mt-2 inline-flex"
          variant="ghost"
          onClick={handleAddColumn}
        >
          {" "}
          Add Column{" "}
        </Button>

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
