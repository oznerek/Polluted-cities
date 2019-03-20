import React from "react";

const ListOfCity = ({city}) => {
  let renderList = city
  
  if (!city) {
    return renderList= <div> Tu cos bedzie </div>;
  }
  let resultsCityList = city.data.results;
      let newList = [];
      let today = new Date
      let dzis = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
      console.log (today)
      console.log(dzis)

      // odseprauj stare pomiary

      let sorts = (x, y) => {
        return y.measurements[0].value - x.measurements[0].value;
      };

      newList.push(resultsCityList.sort(sorts));
      // console.log(newList)
      // let nextList = newList[0].map(cities =>{
      // let miasto = cities.measurements.lastUpdated.slice(0,9)
      //   if (miasto == dzis) {
      //     return cities
      //   }
      // })

      // console.log(nextList)

      renderList = newList[0].map((cities, index) => {
      if (index < 10) {      
      return (
        <div className="card" key={cities.city+index}>
          <div
            className="card-header"
            id={cities.city}
            role="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <div className="row">
              <h3 className="position col-2">#1</h3>
              <h3 className="mb-0 cityName col-10">{cities.city}</h3>
            </div>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              (--- Here is information about the city from  from Mediawiki.org ---)
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      );
      }
    });
    return <div>{renderList}</div>;
  }




export default ListOfCity;
