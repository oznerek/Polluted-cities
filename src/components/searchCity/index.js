import React from "react";
import ListOfCity from "./ListOfCity";
import SearchInput from "./SearchInput";

import { connect } from "react-redux";
import { fetchCity } from "../../action";


class Search extends React.Component {
  render() {
    return (
      <div>
        <ul className="slideshow">
          <li>
            <span>Image 01</span>
            <div className="animation-photo">
              <h3>· · Paris · ·</h3>
            </div>
          </li>
          <li>
            <span>Image 02</span>
            <div className="animation-photo">
              <h3>· · Warsaw · ·</h3>
            </div>
          </li>
          <li>
            <span>Image 03</span>
            <div className="animation-photo">
              <h3>· · Madrid · ·</h3>
            </div>
          </li>
          <li>
            <span>Image 04</span>
            <div className="animation-photo">
              <h3>· · Berlin · ·</h3>
            </div>
          </li>
        </ul>

        <div className="container searchLine">
          <SearchInput />
          <div className="CityList">
            <ListOfCity city={this.props.cityList[0]} />
          </div>
          <footer className="copyright text-center text-light">
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
