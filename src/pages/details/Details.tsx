import React from 'react';
import { useParams } from 'react-router-dom';
import BreweryDetails from '../../components/breweryDetails/BreweryDetails';
import { useFetchDetail } from '../../hooks/useFetchDetail';
import { Brewery } from '../../misc/types/Brewery';
import './Details.css';
import PageTitle from '../../components/pageTitle/PageTitle';

export default function Details() {
  const url: string = "https://api.openbrewerydb.org/v1/breweries";
  const { id } = useParams();
  const { data, loading, error } = useFetchDetail<Brewery>(`${url}/${id}`);
  
  if (loading) {
    return(
      <div className="details">
        <p>Loading brewery details....</p>
      </div>
    );
  }

  if (error) {
    return(
      <div className="details">
        <p>Error: { error }</p>
      </div>
    );
  }

  if (data) {
    return (
      <div className="details">
        <div className='details__contents'>
        <PageTitle title={data.name} />
        <BreweryDetails brewery={data} />
        </div>
      </div>
    )
  }

  return(
    <div className="details">
      <p>No data yet ...</p>
    </div>
  );
}
