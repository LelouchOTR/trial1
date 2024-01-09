import React from 'react';
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
  import fields_in_node from "../get-field-mapping";

const EditableRow = ({columns, hits}) => {

        for (let j = 0; j < fields_in_node.length; j++) {
           row[fields_in_node[j]] = <Input></Input>; 
        }
        rows.push(row);
        console.log("rows:", rows); 
      }
    return (
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
    )
}