import React, { useState } from 'react';
import PageTitle from '../../components/pageTitle/PageTitle';
import SearchInput from '../../components/searchInput/SearchInput';
import BreweriesList from '../../components/breweriesList/BreweriesList';
import PageNavigation, { Sort } from '../../components/pageNavigation/PageNavigation';
import './Home.css';

export default function Home() {
  const basePage: number = 1;
  const basePerPage: number = 10;
  const baseSort: Sort = Sort.ASC;
  const baseUrl: string = `https://api.openbrewerydb.org/v1/breweries`;
  const initUrl: string = `${baseUrl}?page=${basePage}&per_page=${basePerPage}&sort=name:${baseSort}`;

  const [url, setUrl] = useState<string>(initUrl);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [page, setPage] = useState<number>(basePage);
  const [perPage, setPerPage] = useState<number>(basePerPage);
  const [sort, setSort] = useState<Sort>(baseSort);

  const changeUrl = (searchPhrase: string, page: number = basePage, perPage: number = basePerPage, sort: string = baseSort) => {
    let url: string = baseUrl;
    let separator: string = '?';

    if (searchPhrase && searchPhrase.length > 0) {
      url += `${separator}by_name=${searchPhrase}`;
      separator = '&';
    }

    url += `${separator}page=${page}&per_page=${perPage}&sort=name:${sort}`;
    setUrl(url);
  };

  const changeUrlByName = (searchPhrase: string) => {
    console.log('changeUrlByName', searchPhrase, page, perPage,sort);
    setSearchPhrase(searchPhrase);
    // setPage(basePage);

    // console.log('change name', searchPhrase, sort);
    // changeUrl(searchPhrase, basePage, perPage, sort);
  }

  const showNextPage = () => {
    console.log('show next', page);
    setPage(page + 1);
    changeUrlByPage(page + 1, perPage);
  }

  const showPrevPage = () => {
    console.log('show prev');
    setPage(page - 1);
    changeUrlByPage(page - 1, perPage);
  }

  const changeItemsPerPage = (perPage: number) => {
    setPerPage(perPage);
    changeUrlByPage(page, perPage);
  }

  const changeUrlByPage = (page: number = basePage, perPage: number = basePerPage) => {
    changeUrl(searchPhrase, page, perPage, sort);
  }

  const changeSort = (sort: Sort = baseSort) => {
    console.log('change sort', sort);
    setSort(sort);
    changeUrl(searchPhrase, page, perPage, sort);
  }

  return (
    <div className="home">
      <div className="home__body">
        <PageTitle title="Breweries list" />
        <SearchInput textChanged={changeUrlByName} />
        <PageNavigation 
          showNext={showNextPage}
          showPrev={showPrevPage}
          changeItemsPerPage={changeItemsPerPage}
          changeSort={changeSort}
          currentPage={page}
          currentPerPage={perPage}
          currentSort={sort} />

        <BreweriesList url={url} />
        
        <PageNavigation 
          showNext={showNextPage}
          showPrev={showPrevPage}
          changeItemsPerPage={changeItemsPerPage}
          changeSort={changeSort}
          currentPage={page}
          currentPerPage={perPage}
          currentSort={sort} />
      </div>
    </div>
  )
};