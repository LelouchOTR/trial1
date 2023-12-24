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
    const columns1 = [
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
    for (let i = 0; i < columns1.length; i++) {
      columns.push({ key: columns1[i], label: columns1[i] });
    }

    const rows = [];
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
    // console.log("columns: " + columns);
    // console.log("rows: " + rows);
    // console.log("hits: " + hits);
    // console.log("hits length: " + hits.length);

    // Get the hits and the sendEvent function from the useHits hook

    // Return the JSX element that renders the table

    return (
      <NextUIProvider>
        <Table aria-label="Example table with dynamic content" isStriped>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </NextUIProvider>
    );
  } else {
    const { rows, columns } = buildRowsAndColumns(hits);

    // Return the JSX element that renders the table

    return (
      <NextUIProvider>
        <Table aria-label="Example table with dynamic content" isStriped>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
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
