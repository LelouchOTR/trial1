// Import the useHits hook and the UseHitsProps type from react-instantsearch
import { useHits, UseHitsProps } from "react-instantsearch";
import buildRows from "../modules/build-rows";

// Define a custom component that renders a table of hits
function CustomHits(props: UseHitsProps) {
  // Get the hits and the sendEvent function from the useHits hook
  const { hits, sendEvent } = useHits(props);
  console.log(hits);
  // Return the JSX element that renders the table
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <tbody>
          {/* Add a heading row with the column names */}
          <tr className="header">
            <td>ID</td>
            <td>Age</td>
            <td>Weight</td>
            <td>Height</td>
            <td>Glucose</td>
            <td>Cholesterol</td>
            <td>Blood Pressure</td>
            <td>Body Fat</td>
            <td>Sex</td>
            <td>Triglyceride</td>
            <td>Symptoms</td>
          </tr>

          {/* Call the buildRows function to generate the rows from the hits */}
          {buildRows(hits)}
        </tbody>
      </table>
    </div>
  );
}

// Export the custom component as the default export
export default CustomHits;
