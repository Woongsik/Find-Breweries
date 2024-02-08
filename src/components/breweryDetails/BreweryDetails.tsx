import { useParams } from 'react-router-dom';

import { useFetchDetail } from '../../hooks/useFetchDetail';
import { Brewery } from '../../misc/types/Brewery';

export default function BreweryDetails() {
  const url: string = "https://api.openbrewerydb.org/v1/breweries";
  const { id } = useParams();
  const { data, loading, error } = useFetchDetail<Brewery>(`${url}/${id}`);

  if (loading) {
    return <p>Loading brewery details....</p>;
  }

  if (error) {
    return <p>Error: { error }</p>
  }

  if (data) {
    return (
      <div>
        <h1>Details page of {data.name}</h1>
        <ul>
            {Object.entries(data).map(([key, value], i) => {
              if (key !== "name" && key !== 'id' && value) {
                return (
                  <li>{key}: {value}</li>
                );  
              }
              return '';
            })}
          </ul>
      </div>
    );
  }

  return (<div>No data...</div>);
}
