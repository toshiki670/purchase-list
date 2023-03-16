import React, { useState } from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { DataGrid, GridColDef, GridRowId, GridToolbar, GridRowSelectionModel , jaJP } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
import type { Theme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

interface Row {
  id: number;
  firstName: string;
  lastName: string;
  age: number | null;
}

const PurchaseList = () => {


  const [selectedIds, setSelectedIds] = useState<GridRowId[]>([]);

  const handleSelectionChange = (selection: GridRowSelectionModel) => {
    setSelectedIds(selection);
  };

  const handleDeleteRows = () => {
    const remainingRows = rows.filter((row) => !selectedIds.includes(row.id));
    setSelectedIds([]);
    setRows(remainingRows);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  ];
  const [rows, setRows] = useState<Row[]>([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: '', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ])



  return (
    <Box  sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedIds}
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
      <Button onClick={handleDeleteRows}>Delete Selected Rows</Button>
    </Box>
  );
}



export default PurchaseList;