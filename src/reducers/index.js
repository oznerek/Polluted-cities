import { combineReducers } from "redux";

export const renderCitiesList = (state = [], action) => {

  switch (action.type) {
    case "CITY_FETCHED":
      return [action.payload]
        
    default:
      return state;
  }
};

export default combineReducers({
  citiesList: renderCitiesList
});