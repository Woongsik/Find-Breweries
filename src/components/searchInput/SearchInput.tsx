import React, { useCallback, useState } from 'react';
import './SearchInput.css';

type Props = {
  searchChanged: Function
}
export default function SearchInput(props: Props) {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  
  // debounce manually
  const debounce = (callback: Function, delay: number) => {
    let timeout: any;
    return (value: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(value);
      }, delay);
    }
  }

  const submitInputValue = (value: string) => {
    console.log('submit the input:', value);
    props.searchChanged(value);
  }

  const debounced = debounce(submitInputValue, 1000);
  const debouncedCallback = useCallback((value: string) => debounced(value), []);

  const setNewSearch = (value: string) => {
    setSearchPhrase(value);
    debouncedCallback(value);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewSearch(value);
  }

  const clear = () => {
    console.log('Clear');
    setNewSearch('');
  }

  return (
    <div className="search">
      <input
        value={searchPhrase}
        onChange={handleChange}
        className="search__input" />
        <button onClick={clear}>
          Clear  
        </button> 
    </div>
  )
};
