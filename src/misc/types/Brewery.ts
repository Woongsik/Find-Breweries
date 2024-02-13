export enum BreweryType {
  micro = "micro",
  nano = "nano",
  regional = "regional",
  brewpub = "brewpub",
  large = "large",
  planning = "planning",
  bar = "bar",
  contract = "contract",
  proprietor = "proprietor",
  closed = "closed",
  all = "all"
}

export type Brewery = {
  id: string;
  name: string;
  brewery_type: BreweryType;
  address_1: string;
  address_2: string;
  address_3: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}