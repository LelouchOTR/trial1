// Define a helper function that builds table rows from the hits array
function buildRows(hits) {
  return hits.map((hit) => {
    return (
      // Use the hit id as the key for each row
      <tr key={hit.id}>
        {/* Display the hit name, popularity, rating, and price in each cell */}
<<<<<<< Updated upstream
        <td>{hit.name}</td>
        <td>{hit.popularity}</td>
        <td>{hit.rating}</td>
        <td>{hit.price}</td>
=======
        <td>{hit.ID}</td>
        <td>{hit.Age}</td>
        <td>{hit.Weight}</td>
        <td>{hit.Height}</td>
        <td>{hit.Glucose}</td>
        <td>{hit.Cholesterol}</td>
        <td>{hit["Blood Pressure"]}</td>
        <td>{hit["Body Fat"]}</td>
        <td>{hit.Sex}</td>
        <td>{hit.Triglyceride}</td>
        <td>{hit.Symptoms}</td>
>>>>>>> Stashed changes
      </tr>
    );
  });
}

export default buildRows;
