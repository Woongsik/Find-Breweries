import { Link } from 'react-router-dom';
import { Brewery } from '../../misc/types/Brewery';
import { useFetch } from '../../hooks/useFetch';
import './BreweriesList.css';

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
      <h1>List of Breweries</h1>
      <ol>
      {data.map((brewery) => 
        <li key={brewery.id}>
          <div>{brewery.name}</div>
          <div>
            <button>
              <Link to={`/brewery/${brewery.id}`}>Details</Link>
            </button>
          </div>
        </li>)
      }
      </ol>
    </div>
  )
}
