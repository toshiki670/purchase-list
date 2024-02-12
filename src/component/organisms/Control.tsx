import React from  "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import Search from '../molecules/Search';

type Props = {
  rows: any[]
  setRows: React.Dispatch<React.SetStateAction<any[]>>
  selectedIds: any[]
  setSelectedIds: React.Dispatch<React.SetStateAction<any[]>>
}


export default function Control(props: Props) {

  const handleDeleteRows = () => {
    const remainingRows = props.rows.filter((row) => !props.selectedIds.includes(row.id));
    props.setSelectedIds([]);
    props.setRows(remainingRows);
  };

  return (
    <Grid container  rowSpacing={3}  justifyContent="center" >
      {/* <Grid item xs={10}>
        <Search />
      </Grid> */}

      <Grid container item xs={9} columnSpacing={2}  justifyContent="flex-end">
        <Grid item xs={2}>
          <Button fullWidth variant="outlined">Add</Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="outlined" onClick={handleDeleteRows}>Delete</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}