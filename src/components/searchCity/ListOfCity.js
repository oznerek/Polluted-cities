import React from "react";
import { connect } from "react-redux";
import { fetchCityDetails } from "../../action";

class ListOfCity extends React.Component {
  render() {
    const { city } = this.props;
    let renderList = city;

    if (!city) {
      return (renderList = (
        <div className="text-center info">
          <b>Check The Most Polluted Cities In The Selected Country</b>
        </div>
      ));
    }
    let resultsCityList = city.data.results;
    let fullListOfCity = [];
    let sortedList = [];
    let lastUpdateTime = "";
    let dateOfUpdateData = "";
    let d = new Date();
    let today =
      d.getFullYear() +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + d.getDate()).slice(-2);

    let sorts = (x, y) => {
      return y.measurements[0].value - x.measurements[0].value;
    };
    fullListOfCity.push(resultsCityList.sort(sorts));

    // sorted the old values
    fullListOfCity[0].forEach(cities => {
      lastUpdateTime = cities.measurements[0].lastUpdated;
      dateOfUpdateData = lastUpdateTime.slice(0, 10);
      if (dateOfUpdateData === today) {
        return sortedList.push(cities);
      }
    });
    console.log(sortedList)
    // filter data, remove the duplicate city and send request for description
    let filterCityList = [...new Set(sortedList.map(item =>item.city))];
    //  item.measurements[0].value
    console.log(filterCityList)
    filterCityList.forEach((cities, index) => {
      if (index < 10) {
        this.props.fetchCityDetails(cities);
      }
    });

    renderList = filterCityList.map((cities, index) => {
      if (index < 10) {

      let dataTrget = `#${index}`;
      let description = "";
      let link = "";
      let lastUpdate = "";
      let pollution = "" ;

      sortedList.forEach((el, index) =>{
        if (index < 10) {
        if (cities === el.city) {
          pollution = parseFloat(el.measurements[0].value).toFixed(2);
          lastUpdate = el.measurements[0].lastUpdated.slice(0, 10) + ' ' +el.measurements[0].lastUpdated.slice(11, 16)
        }
      }})
      // search description to city
      if (this.props.cityDescription[index] !== undefined) {
        this.props.cityDescription.forEach(item => {
          if (item[0] === cities) {
            description = item[2][0];
            link = item[3][0];
          }
        });
      }
      
        
        return (
          <div className="card" key={cities + index}>
            <div
              className="card-header"
              id={cities}
              role="button"
              data-toggle="collapse"
              data-target={dataTrget}
              aria-expanded="false"
              aria-controls={index}
            >
              <div className="row flex">
                <div className='flex cityName'>
                  <h3 className="position col-2">{index + 1}</h3>
                  <h3 className="mb-0 cityName col-10">{cities}</h3>
                </div>
                <div className='pollution'>
                  <div className='flex'><span>Date:</span><span>{lastUpdate}</span> </div>
                  <div className='flex'><span>Pollution (pm10):</span><span>{pollution} &mu;g/m<sup>3</sup></span>  </div>
                </div>
              </div>
            </div>
            <div
              id={index}
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>{description}</p>
                <p className="float-right">
                  <a href={link}>More information</a>
                </p>
              </div>
            </div>
          </div>
        );
      }
    });
    return <div>{renderList}</div>;
  }
}
const mapStateToProps = state => {
  return { cityDescription: state.citiesDescription };
};
export default connect(
  mapStateToProps,
  { fetchCityDetails }
)(ListOfCity);
