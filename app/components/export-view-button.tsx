import { NextUIProvider } from "@nextui-org/react";
import { useHits } from "react-instantsearch";
import { Button } from "@nextui-org/react";
import exportToExcel from "../modules/export-view";

export default function GetHitsFromClient(props) {
  const { hits } = useHits(props);
  //console.log("hits from function export" + JSON.stringify(hits));

  return (
    <NextUIProvider>
      <Button
        className="w-auto ml-4 mt-2 inline-flex"
        variant="ghost"
        onClick={() => {
          exportToExcel(hits);
        }}
      >
        Export Hits
      </Button>
    </NextUIProvider>
  );
}
