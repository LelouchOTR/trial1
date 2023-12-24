// Import the useHits hook and the UseHitsProps type from react-instantsearch
import { useHits, UseHitsProps } from "react-instantsearch";
import buildRows from "../modules/build-rows";
import fields_in_node from "../modules/get-field-mapping";
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
} from "@nextui-org/react";
import buildRowsAndColumns from "../modules/build-rows-and-columns";
// Define a custom component that renders a table of hits
function CustomHits(props: UseHitsProps) {
  const { hits, sendEvent } = useHits(props);

  if (hits.length == 0) {
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
    // If there are hits, build the rows and columns from the hits
    const { rows, columns } = buildRowsAndColumns(hits);

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
  }
}

// Export the custom component as the default export
export default CustomHits;
