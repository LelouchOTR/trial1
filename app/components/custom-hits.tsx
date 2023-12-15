// Import the useHits hook and the UseHitsProps type from react-instantsearch
import { useHits, UseHitsProps } from "react-instantsearch";

// Define a custom component that renders a table of hits
function CustomHits(props: UseHitsProps) {
    // Get the hits and the sendEvent function from the useHits hook
    const { hits, sendEvent } = useHits(props);

    // Define a helper function that builds table rows from the hits array
    function buildRows(hits) {
        return hits.map(hit => {
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

    // Return the JSX element that renders the table
    return (
        <table>
            <tbody>
                {/* Add a heading row with the column names */}
                <tr className="heading">
                    <td>name</td>
                    <td>popularity</td>
                    <td>rating</td>
                    <td>price</td>
                </tr>
                {/* Call the buildRows function to generate the rows from the hits */}
                {buildRows(hits)}
            </tbody>
        </table>
    );
}

// Export the custom component as the default export
export default CustomHits;
