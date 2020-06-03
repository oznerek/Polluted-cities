import lodash from "lodash";
import axios from "axios";

export const fetchCity = countries => async dispatch => {
  let data = {
    country: countries,
    limit: 1000,
    parameter: "pm25"
  };
  const response = await axios.get("https://api.openaq.org/v1/latest", {
    params: data
  });
  return dispatch({
    type: "CITY_FETCHED",
    payload: response
  });
};

export const fetchCityDetails = cityName => dispatch =>
  _fetchCityDetails(cityName, dispatch);
const _fetchCityDetails = lodash.memoize(async (cityName, dispatch) => {
  const data = {
    action: "opensearch",
    prop: "description",
    search: cityName,
    origin: "*",
    format: "json"
  };
  const response = await axios.get("https://en.wikipedia.org/w/api.php", {
    params: data
  });
  return dispatch({
    type: "CITY_DETAILS_FETCHED",
    payload: response.data,
    cityName
  });
});
