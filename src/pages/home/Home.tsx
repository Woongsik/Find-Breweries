import React from 'react';
import BreweriesList from '../../components/breweriesList/BreweriesList';
import SearchInput from '../../components/searchInput/SearchInput';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div>
      <SearchInput />
      <BreweriesList />
      </div>
    </div>
  )
};