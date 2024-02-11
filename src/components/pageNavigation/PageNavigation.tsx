import React from 'react';
import { 
  Pagination, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  SelectChangeEvent, 
  Grid,
  ButtonGroup,
  Button
} from '@mui/material';

type Props = {
  changePage: Function,
  changeItemsPerPage: Function,
  changeSort: Function,
  currentPage: number,
  currentPerPage: number,
  currentSort: string
}

export enum Sort {
  ASC = "asc",
  DESC = "desc"
}


export default function PageNavigation(props: Props) {
  const { currentPage, currentPerPage, currentSort } = props;

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    props.changeItemsPerPage(parseInt(value));  
  };

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    props.changePage(value);
  };

  return (
    <Grid 
      container 
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 5, backgroundColor: 'white', borderTop: '1px solid gray', position: 'sticky', bottom: '0'}}>
      <Grid item>
        <Pagination count={10} color="primary" page={currentPage} onChange={handlePageChange} />
      </Grid>
      
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="items-per-page-label">Items per Page</InputLabel>
          <Select
            labelId="items-per-page-label"
            value={currentPerPage.toString()}
            label="Items per Page"
            onChange={handleSelectChange}>

            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={10}>10</MenuItem>
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
