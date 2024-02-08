import { Link } from 'react-router-dom';
import { Brewery } from '../../misc/types/Brewery';
import { useFetch } from '../../hooks/useFetch';
import './BreweriesList.css';

type Props = {
  searchPhrase: string
}

export default function BreweriesList(props: Props) {
  const { searchPhrase } = props;
  let url: string = "https://api.openbrewerydb.org/v1/breweries";
  if (searchPhrase && searchPhrase.length > 0) {
    url = `https://api.openbrewerydb.org/v1/breweries/search?query=${searchPhrase}`;
  }

  const { data, loading, error } = useFetch<Brewery>(url);

  if (loading) {
    return <p>Loading all breweries {searchPhrase.length > 0 ? `by ${searchPhrase}` : ``}....</p>;
  }

  if (error) {
    return <p>Error: { error }</p>
  }
  
  return (
    <div>
      <h1>List of Breweries {searchPhrase.length > 0 ? `by ${searchPhrase}` : ``}</h1>
      <ol>
      {data.map((brewery) => 
        <li key={brewery.id}>
          <div>
            {brewery.name}
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
