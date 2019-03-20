import React from "react";
import ListOfCity from "./ListOfCity";
import SearchInput from "./SearchInput";

import { connect } from "react-redux";
import { fetchCity } from "../../action";


class Search extends React.Component {

  render() {
    return (
      <div>
        <ul className="cb-slideshow">
          <li>
            <span>Image 01</span>
            <div className="animation-photo">
              <h3>re·lax·a·tion</h3>
            </div>
          </li>
          <li>
            <span>Image 02</span>
            <div className="animation-photo">
              <h3>Down·town·c·ity</h3>
            </div>
          </li>
          <li>
            <span>Image 03</span>
            <div className="animation-photo">
              <h3>new·pro·jec·tion</h3>
            </div>
          </li>
          <li>
            <span>Image 04</span>
            <div className="animation-photo">
              <h3>new·pro·jec·tion</h3>
            </div>
          </li>
        </ul>

        <div className="container searchLine">
          <SearchInput />
          <div className="CityList pt-4">
            <ListOfCity city={this.props.cityList[0]}/>
          </div>

          <footer className="pt-5 copyright text-center pt-5 text-light">
            <div>&copy; by Michal Oznerek.</div>
            <div>
              Powered by
              <a href="https://openaq.org/" className="link">
                openaq.org
              </a>
              &
              <a
                href="https://www.mediawiki.org/wiki/MediaWiki"
                className="link"
              >
                mediawiki.org
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { cityList: state.citiesList };
};

export default connect(
  mapStateToProps,
  { fetchCity }
)(Search);
