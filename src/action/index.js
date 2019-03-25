import lodash from "lodash";
import axios from "axios";

export const fetchCity = countries => async dispatch => {
  const openaq = await axios.create({
    baseURL: "https://api.openaq.org/v1/latest",
    params: {
      country: countries,
      limit: 1000,
      parameter: "pm10"
    }
  });

  const response = await openaq.get();
  return dispatch({
    type: "CITY_FETCHED",
    payload: response
  });
};

export const fetchCityDetails = cityName => dispatch =>
  _fetchCityDetails(cityName, dispatch);
const _fetchCityDetails = lodash.memoize(async (cityName, dispatch) => {
  const mediawiki = await axios.create({
    baseURL: "https://en.wikipedia.org/w/api.php",
    params: {
      action: "opensearch",
      prop: "description",
      search: cityName,
      origin: "*",
      format: "json"
    }
  });
  const response = await mediawiki.get();
  return dispatch({
    type: "CITY_DETAILS_FETCHED",
    payload: response.data,
    cityName
  });
});
