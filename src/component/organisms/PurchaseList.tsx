import React, { useState } from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { DataGrid, GridColDef, GridRowId, GridToolbar, GridRowSelectionModel , jaJP } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

type Props = {
  columnVisibility: {}
  columns: GridColDef[]
  rows: any[]
  setSelectedIds: React.Dispatch<React.SetStateAction<any[]>>
}

export default function PurchaseList(props: Props) {
  const handleSelectionChange = (selection: GridRowSelectionModel) => {
    props.setSelectedIds(selection);
  };

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        initialState={{
          columns: {
            columnVisibilityModel: props.columnVisibility,
          },
        }}
        rows={props.rows}
        columns={props.columns}
        onRowSelectionModelChange={handleSelectionChange}
        // rowSelectionModel={props.selectedIds}
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
}
