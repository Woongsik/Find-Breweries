import React, { useCallback, useState } from 'react';
import * as lodash from 'lodash';
import { 
  Box, 
  FormControl, 
  TextField, 
  IconButton 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import './SearchInput.css';

type Props = {
  textChanged: Function
}

export default function SearchInput(props: Props) {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [taskInQue, setTaskInQue] = useState<any>(undefined);
  
  // debounce manually
  const debounce = (callback: Function) => {
    let timeout: any;
    return (value: string, delay: number = 1000) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(value);
      }, delay);
    }
  }

  const submitInputValue = (value: string) => {
    props.textChanged(value);
  }

  /* line 37 to 42 and line 46 about debounce with useCallback  */
  const debounced = debounce(submitInputValue);
  // const debounced = lodash.debounce(submitInputValue, 1000);
  
  // Optimization useCallback
  // const debouncedCallback = useCallback((value: string) => debounced(value), []);

  const setNewSearch = (value: string, delay: number = 1000) => {
    setSearchPhrase(value);
    // debouncedCallback(value, delay); => This is not working as expected

    // Alternative
    if (taskInQue) {
      clearTimeout(taskInQue);
    }

    setTaskInQue(setTimeout(() => {
      submitInputValue(value);
    }, delay));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewSearch(value, 1000);
  }

  const clear = () => {
    console.log('Clear');
    setNewSearch('', 0);
  }

  return (
    <FormControl fullWidth>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '5px 10px' }}>
        <SearchIcon 
          sx={{ color: 'action.active', mr: 2, mt: 1.5 }} />
        <TextField 
          fullWidth
          label="Search breweries by name" 
          variant="standard" 
          value={searchPhrase}
          onChange={handleChange} />

        <IconButton 
          onClick={clear}
          color="default" 
          aria-label="Clear the search"
          sx={{ mt: 1.5 }}>
          <CancelIcon />
        </IconButton>
      </Box>
    </FormControl>
  )
};
