import React, { useState } from 'react';
import BreweriesList from '../../components/breweriesList/BreweriesList';
import SearchInput from '../../components/searchInput/SearchInput';
import './Home.css';

export default function Home() {
  const [searchPhrase, setSearchPhrase] = useState<string>('');

  return (
    <div className="home-container">
      <div>
      <SearchInput textChanged={(newSearch: string) => setSearchPhrase(newSearch)} />
      <BreweriesList searchPhrase={searchPhrase}/>
      </div>
    </div>
  )
};