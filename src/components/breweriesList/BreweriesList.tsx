import { Link } from 'react-router-dom';
import { Brewery } from '../../misc/types/Brewery';
import { useFetch } from '../../hooks/useFetch';
import './BreweriesList.css';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

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
    <Grid container sx={{ my: 5 }}>
      {data.map((brewery: Brewery) => 
        <Grid item  sx={{ width: '100%' }}>
          <Card sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {brewery.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {brewery.address_1} {brewery.address_2} {brewery.address_3}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`/brewery/${brewery.id}`}>Details</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>)
      }
    </Grid>
  )
}
