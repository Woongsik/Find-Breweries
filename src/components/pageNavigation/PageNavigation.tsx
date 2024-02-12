import React from 'react';
import { 
  Pagination, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  SelectChangeEvent, 
  Grid
} from '@mui/material';

type Props = {
  currentPage: number,
  currentPerPage: number
  changePage: Function,
  changeItemsPerPage: Function
}

export default function PageNavigation(props: Props) {
  const { currentPage, currentPerPage } = props;

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
    </Grid>
  )
}
