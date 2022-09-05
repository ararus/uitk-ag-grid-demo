import React from "react";
import { AgGridReact } from "ag-grid-react";
import { colDefs } from "./colDefs";
import { rowData } from "./rowData";

import "ag-grid-community/dist/styles/ag-grid.css";
import "@jpmorganchase/uitk-theme/index.css";
import "@jpmorganchase/uitk-ag-grid-theme/uitk-ag-theme.css";

import { ToolkitProvider } from "@jpmorganchase/uitk-core";

function App() {
  return (
    <ToolkitProvider density={"high"} theme={"light"}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="ag-theme-uitk-high-light"
          style={{ height: 500, width: 800 }}
        >
          <AgGridReact
            columnDefs={colDefs}
            rowData={rowData}
            rowHeight={20}
            headerHeight={20}
            suppressMenuHide={true}
            rowSelection="single"
            defaultColDef={{
              filter: true,
              resizable: true,
              sortable: true,
            }}
          />
        </div>
      </div>
    </ToolkitProvider>
  );
}

export default App;
