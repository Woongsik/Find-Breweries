import React from 'react';
import { Grid, ButtonGroup, Button } from '@mui/material';

type Props = {
  changeSort: Function,
  currentSort: Sort
}

export enum Sort {
  ASC = "asc",
  DESC = "desc"
}

export default function SortButtons(props: Props) {
  const { currentSort } = props;

  return (
    <Grid container sx={{ justifyContent: 'right' }}>
      <Grid item>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button 
            onClick={() => props.changeSort(Sort.ASC)}
            disabled={currentSort === Sort.ASC}>
            ASC
          </Button>
          <Button
            onClick={() => props.changeSort(Sort.DESC)}
            disabled={currentSort === Sort.DESC}>
            DESC
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}
