import React, { useCallback, useState } from 'react';
import './SearchInput.css';

type Props = {
  textChanged: Function
}
export default function SearchInput(props: Props) {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  
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

  const debounced = debounce(submitInputValue);
  // Optimization useCallback
  const debouncedCallback = useCallback((value: string, delay: number) => debounced(value, delay), []);

  const setNewSearch = (value: string, delay: number = 1000) => {
    setSearchPhrase(value);
    debouncedCallback(value, delay);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewSearch(value);
  }

  const clear = () => {
    console.log('Clear');
    setNewSearch('', 0);
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
