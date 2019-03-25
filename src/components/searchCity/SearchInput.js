import React from "react";
import { connect } from "react-redux";
import { fetchCity } from "../../action";

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
    switch (country) {
      case "poland":
        return this.props.fetchCity("PL");

      case "france":
        return this.props.fetchCity("FR");

      case "germany":
        return this.props.fetchCity("DE");

      case "spain":
        return this.props.fetchCity("ES");
      default:
      return
    }
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    let country = this.state.term.toLowerCase();
    if (
      country !== "poland" &&
      country !== "france" &&
      country !== "germany" &&
      country !== "spain"
    ) {
      this.setState({
        errors: "*Please enter value : Poland, France, Spain or Germany"
      });
    } else {
      this.setState({ errors: "" });
    }
    sessionStorage.setItem("key", country);
    this.check();
  };

  render() {
    return (
      <div>
        <div className="row ">
          <div />
          <div className="col-3" />
          <div className="col-6 search">
            <div className="row my-1">
              <div className="input-group col-10">
                <form onSubmit={this.onFormSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="  Search . . ."
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                </form>
              </div>
              <div className="col-2 serach">
                <span className="float-right">
                  <i className="fas fa-search fa-2x" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-3" />
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