import { Brewery } from '../../misc/types/Brewery';
import { useFetch } from '../../hooks/useFetch';

export default function BreweriesList() {
  const url: string = "https://api.openbrewerydb.org/v1/breweries";
  const { data, loading, error } = useFetch<Brewery>(url);

  if (loading) {
    return <p>Loading all breweries ....</p>;
  }

  if (error) {
    return <p>Error: { error }</p>
  }
  
  return (
    <div>
      List of Breweries
      <ol>
      {data.map((brewery) => 
        <li key={brewery.id}>
          {brewery.name}
          <ul>
            {Object.entries(brewery).map(([key, value], i) => {
              if (key !== "name" && key !== 'id' && value) {
                return (
                  <li key={`${brewery.id}_${key}`}>{key}: {value}</li>
                );  
              }
              return '';
            })}
          </ul>
        </li>)
      }
      </ol>
    </div>
  )
}
