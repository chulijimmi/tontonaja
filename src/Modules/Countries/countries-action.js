export const COUNTRY_LOADED = "Countries/country_loaded";
export const SET_COUNTRY = "Countries/set_country";

export const countryLoaded = () => ({
  type: COUNTRY_LOADED
});

export const setCountry = country => ({
  type: SET_COUNTRY,
  response: country
});
