import React from "react";
import { connect } from "react-redux";
import { fetchCity } from "../../action";
import { countryCode } from "./listOfCountry";


class SearchInput extends React.Component {
  state = { term: "", errors: "" };
  componentWillMount() {
    let data = sessionStorage.getItem("key");
    if (data) {
      this.setState({ term: data });
    }
  }
  componentDidMount() {
    this.check();
  }

  check = () => {
    let country = "";
    if (this.state.term) {
      country = this.state.term.toLowerCase();
    }
    countryCode.forEach(el => {
      let countryName = el.name.toLowerCase();
      if (country === countryName) {
        return this.props.fetchCity(el.code);
      }
    });
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    let country = this.state.term.toLowerCase();
    sessionStorage.setItem("key", country);
    this.check();
  };

  render() {
    return (
        <div>
          <div className="search">
            <form onSubmit={this.onFormSubmit}>
              <input
                type="text"
                id="validationDefault01"
                placeholder="  Search . . ."
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </form>
            <div className="search--icon">
              <i className="fas fa-search" onClick={this.onFormSubmit} />
            </div>
            <div className="tip">
              <i className="fas fa-info-circle tooltips" />
              <div className="tooltips__text">
                  <div> Input search work only on the full English name of the country</div>
                </div>
            </div>
          </div>

        <div className="d-flex justify-content-center">
          <div className="text-center error">{this.state.errors}</div>
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
)(SearchInput);
