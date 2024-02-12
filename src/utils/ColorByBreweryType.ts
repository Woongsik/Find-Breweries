import { BreweryType } from "../misc/types/Brewery";

export const getColorByType = (type:string) => {
  if (type === BreweryType.BrewPub) {
    return 'success';
  } else if (type === BreweryType.Large) {
    return 'warning';
  } else if (type === BreweryType.Contract) {
    return 'secondary';
  } else if (type === BreweryType.Closed) {
    return 'error';
  }

  return 'primary';
}

export default {
  getColorByType
}