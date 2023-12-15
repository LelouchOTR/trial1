// Define a helper function that builds table rows from the hits array
function buildRows(hits) {
  return hits.map((hit) => {
    return (
      // Use the hit id as the key for each row
      <tr key={hit.id}>
        {/* Display the hit name, popularity, rating, and price in each cell */}
        <td>{hit.name}</td>
        <td>{hit.popularity}</td>
        <td>{hit.rating}</td>
        <td>{hit.price}</td>
      </tr>
    );
  });
}

export default buildRows;
