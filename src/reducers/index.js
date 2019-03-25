import { combineReducers } from "redux";

export const renderCitiesList = (state = [], action) => {
  switch (action.type) {
    case "CITY_FETCHED":
      return [action.payload];
    default:
      return state;
  }
};
export const renderCitiesDescription = (state = [], action) => {
  switch (action.type) {
    case "CITY_DETAILS_FETCHED":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default combineReducers({
  citiesList: renderCitiesList,
  citiesDescription: renderCitiesDescription
});
