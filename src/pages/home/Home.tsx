import React, { useState } from 'react';

import PageTitle from '../../components/pageTitle/PageTitle';
import SearchInput from '../../components/searchInput/SearchInput';
import BreweriesList from '../../components/breweriesList/BreweriesList';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import SortButtons, { Sort } from '../../components/sortButtons/SortButtons';
import './Home.css';

export default function Home() {
  const basePage: number = 1;
  const baseItemsPerPage: number = 10;
  const baseSort: Sort = Sort.ASC;
  const baseUrl: string = `https://api.openbrewerydb.org/v1/breweries`;
  const initUrl: string = `${baseUrl}?page=${basePage}&per_page=${baseItemsPerPage}&sort=name:${baseSort}`;

  const [url, setUrl] = useState<string>(initUrl);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [page, setPage] = useState<number>(basePage);
  const [perPage, setPerPage] = useState<number>(baseItemsPerPage);
  const [sort, setSort] = useState<Sort>(baseSort);

  const changeUrl = (searchPhrase: string, page: number = basePage, itemsPerPage: number = baseItemsPerPage, sort: string = baseSort) => {
    let url: string = baseUrl;
    let separator: string = '?';

    if (searchPhrase && searchPhrase.length > 0) {
      url += `${separator}by_name=${searchPhrase}`;
      separator = '&';
    }

    url += `${separator}page=${page}&per_page=${itemsPerPage}&sort=name:${sort}`;
    setUrl(url);
  };

  const changeUrlByName = (searchPhrase: string) => {
    console.log('changeUrlByName', searchPhrase, page, perPage,sort);
    setSearchPhrase(searchPhrase);
    setPage(basePage);
    changeUrl(searchPhrase, basePage, perPage, sort);
  }

  const changePage = (newPage: number) => {
    setPage(newPage);
    changeUrlByPage(newPage, perPage);
  } 

  const changeItemsPerPage = (newItemsPerPage: number) => {
    setPerPage(newItemsPerPage);
    changeUrlByPage(page, newItemsPerPage);
  }

  const changeUrlByPage = (newPage: number = basePage, newItemsPerPage: number = baseItemsPerPage) => {
    changeUrl(searchPhrase, newPage, newItemsPerPage, sort);
  }

  const changeSort = (sort: Sort = baseSort) => {
    console.log('change sort', sort);
    setSort(sort);
    changeUrl(searchPhrase, page, perPage, sort);
  }

  return (
    <div className="home">
      <div className="home__contents">
        <PageTitle title="Breweries list" />
        <SearchInput textChanged={changeUrlByName} />
        <SortButtons 
          changeSort={changeSort}
          currentSort={sort} />
        <BreweriesList url={url} />   
        <PageNavigation 
          changePage={changePage}
          changeItemsPerPage={changeItemsPerPage}
          currentPage={page}
          currentPerPage={perPage}
           />
      </div>
    </div>
  )
};