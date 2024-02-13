import React from 'react';
import { 
  Grid, 
  ButtonGroup, 
  Button, 
  FormControl, 
  InputLabel, 
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { BreweryType } from '../../misc/types/Brewery';

type Props = {
  currentSort: Sort,
  currentBreweryType: BreweryType,
  changeSort: Function,
  changeBreweryType: Function
}

export enum Sort {
  ASC = "asc",
  DESC = "desc"
}

export default function SortButtons(props: Props) {
  const { currentSort, currentBreweryType } = props;

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    props.changeBreweryType(value);  
  };

  return (
    <Grid container sx={{ justifyContent: 'right' }}>
      <Grid item>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="items-sort-type-label">Sort type</InputLabel>
          <Select
            labelId="items-sort-type-label"
            value={currentBreweryType}
            label="Sort type"
            onChange={handleSelectChange}>
            {Object.keys(BreweryType).map((key: string) =>
              <MenuItem key={key} value={key}>{key.toUpperCase()}</MenuItem>
            )}      
          </Select>
        </FormControl>
      </Grid>

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
