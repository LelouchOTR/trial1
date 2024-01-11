// Import the NextUIProvider component from NextUI library
import { NextUIProvider } from "@nextui-org/react";
// Import the useHits hook from react-instantsearch library
import { useHits } from "react-instantsearch";
// Import the Button component from NextUI library
import { Button } from "@nextui-org/react";
// Import the exportToExcel function from the local module
import exportToExcel from "../modules/export-view";

// Define a function component to get hits from the client
export default function GetHitsForExport(props) {
  // Use the useHits hook to get the hits from the props
  const { hits } = useHits(props);
  // Uncomment the following line to log the hits to the console
  //console.log("hits from function export" + JSON.stringify(hits));

  // Return the JSX element
  return (
    // Wrap the button in the NextUIProvider component
    <NextUIProvider>
      {/* Render a button with some styles and a click handler */}
      <Button
        className="w-auto ml-4 mt-2 inline-flex"
        variant="ghost"
        onClick={() => {
          // Call the exportToExcel function with the hits as an argument
          exportToExcel(hits);
        }}
      >
        {/* Display the text "Export Hits" on the button */}
        Export Hits
      </Button>
    </NextUIProvider>
  );
}
