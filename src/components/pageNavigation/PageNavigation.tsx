import React from 'react'

type Props = {
  showNext: Function,
  showPrev: Function,
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
  const { showNext, showPrev, currentPage, currentPerPage, currentSort } = props;

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    props.changeItemsPerPage(parseInt(value));
  }

  return (
    <div>
      <button 
        disabled={currentPage < 2} 
        onClick={() => showPrev()}>
        Prev
      </button>
      <h1>{currentPage}</h1>
      <button
        onClick={() => showNext()}>
        Next
      </button>

      <div>
      <label>Items per page: </label>

      <select 
        name="perPage" 
        id="perPage" 
        onChange={handlePerPageChange}
        value={currentPerPage}>
        <option value="200">200</option>
        <option value="100" >100</option>
        <option value="50" >50</option>
        <option value="30" >30</option>
        <option value="10" >10</option>
      </select>
      </div>

      <div>
        Sort: {currentSort}
        <button 
          disabled={currentSort === Sort.ASC}
          onClick={() => props.changeSort(Sort.ASC)}>
          Acs
        </button>
        <button 
          disabled={currentSort === Sort.DESC}
          onClick={() => props.changeSort(Sort.DESC)}>
          Desc
        </button>
      </div>
    </div>
    
  )
}
