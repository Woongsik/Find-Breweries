import { Link } from 'react-router-dom';
import { Brewery } from '../../misc/types/Brewery';
import { useFetch } from '../../hooks/useFetch';
import './BreweriesList.css';

type Props = {
  url: string
}

export default function BreweriesList(props: Props) {
  const { url } = props;
  const { data, loading, error } = useFetch<Brewery>(url);

  if (loading) {
    return (
      <div className="breweries-list">
        <p>Loading breweries....</p>
      </div>   
      );
  }

  if (error) {
    return (
      <div className="breweries-list">
        <p>Error: { error }</p>
      </div>
    )
  }
  
  return (
    <div className="breweries-list">
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
