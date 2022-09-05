import { ColDef } from "ag-grid-community";

export const colDefs: ColDef[] = [
  {
    headerName: "Name",
    field: "name",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    editable: false,
  },
  {
    headerName: "Code",
    field: "code",
  },
  {
    headerName: "Capital",
    field: "capital",
  },
  {
    headerName: "Population",
    type: "numericColumn",
    field: "population",
    filter: "agNumberColumnFilter",
    editable: true,
    cellClass: ["editable-numeric-cell"],
  },
];
