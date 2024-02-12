import { Link } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Chip 
} from '@mui/material';

import { Brewery } from '../../misc/types/Brewery';
import { getColorByType } from '../../utils/ColorByBreweryType';

type Props = {
  brewery: Brewery | undefined
}

export default function BreweryDetails(props: Props) {
  const { brewery } = props;
  const imageUrl: string = 'https://visitfloydva.com/wp-content/uploads/2014/06/Chateau-Morrisette-cellar.main-view.F-from-LM1.jpg'

  if (brewery) {
    return (
      <Grid container justifyContent='center'>
        <Grid item>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt="brewery_image"
              />
              <CardContent>
                <Chip label={brewery.brewery_type} color={getColorByType(brewery.brewery_type)} variant="outlined" />
                <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                  {brewery.address_1} {brewery.address_2} {brewery.address_3}<br></br>
                  {brewery.postal_code} {brewery.state} {brewery.city}<br></br>
                  {brewery.country}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={brewery.website_url}>{brewery.website_url}</Link>
              </Button>
            </CardActions>
        </Card>
      </Grid>
    </Grid>
    );
  }

  return (<div>No data...</div>);
}
