import fields_in_node from "./get-field-mapping";

export default function buildRowsAndColumns(hits) {
  const rows = []; // Array to store the rows
  const columns = []; // Array to store the columns
  for (let i = 0; i < fields_in_node.length; i++) {
    columns.push({ key: fields_in_node[i], label: fields_in_node[i] });
  }

  for (let i = 0; i < hits.length; i++) {
    const row = {};

    row.key = i;
    for (let j = 0; j < fields_in_node.length; j++) {
      if (hits[i][fields_in_node[j]] === undefined) {
        row[fields_in_node[j]] = "NA";
      } else {
        row[fields_in_node[j]] = hits[i][fields_in_node[j]];
      }
    }
    rows.push(row);
  }

  return { rows, columns };
}
