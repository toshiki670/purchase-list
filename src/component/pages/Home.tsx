import React, { useState,FC } from  "react";

import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { DataGrid, GridColDef, GridRowId, GridToolbar, GridRowSelectionModel , jaJP } from '@mui/x-data-grid';
import DefaultLayout from '../templates/DefaultLayout';
import Control from '../organisms/Control';
import PurchaseList from '../organisms/PurchaseList';



type Row = {
  id: number;
  maker: string;
  name: string;
  price: number | null;
  salePrice: number | null;
  purchaseDate: Date;
  disposalDate: Date | null;
  remark: string;
};


export default function Home() {

  const [selectedIds, setSelectedIds] = useState<GridRowId[]>([]);


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'maker', headerName: 'Maker', width: 70 },
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'price', headerName: 'Price', type: 'number', width: 70 },
    { field: 'salePrice', headerName: 'Sale price', type: 'number', width: 70 },
    { field: 'purchaseDate', headerName: 'Purchase date',  type: 'datetime' },
    { field: 'disposalDate', headerName: 'Disposal date', width: 130 , type: 'datetime' },
    { field: 'remark', headerName: 'Remark', width: 130 },
  ];

  const [rows, setRows] = useState<Row[]>([
    { id: 1, maker: 'Apple1', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 2, maker: 'Apple2', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 3, maker: 'Apple3', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 4, maker: 'Apple4', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 5, maker: 'Apple5', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 6, maker: 'Apple6', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 7, maker: 'Apple7', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 8, maker: 'Apple8', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 9, maker: 'Apple9', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 10, maker: 'Apple10', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 11, maker: 'Apple11', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 12, maker: 'Apple12', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 13, maker: 'Apple13', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 14, maker: 'Apple14', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 15, maker: 'Apple15', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 16, maker: 'Apple16', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
    { id: 17, maker: 'Apple17', name: 'Jon', price: 3535, salePrice: null, purchaseDate: new Date(2021, 8, 20), disposalDate: null, remark: "" },
  ])


  return (
    <DefaultLayout>
      <Control
        rows={rows}
        setRows={setRows}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      <Box sx={{ mt: 4 }}>
        <PurchaseList
          columnVisibility={{
            id: false
          }}
          columns={columns}
          rows={rows}
          setSelectedIds={setSelectedIds}
        />
      </Box>
    </DefaultLayout>
  );
}
