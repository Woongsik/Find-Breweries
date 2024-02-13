import { BreweryType } from "../misc/types/Brewery";

export const getColorByType = (type: BreweryType) => {
  if (type === BreweryType.brewpub) {
    return 'success';
  } else if (type === BreweryType.large) {
    return 'warning';
  } else if (type === BreweryType.contract) {
    return 'secondary';
  } else if (type === BreweryType.closed) {
    return 'error';
  }

  return 'primary';
}