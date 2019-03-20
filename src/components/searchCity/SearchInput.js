import React from 'react'
import {connect} from 'react-redux'
import {fetchCity} from '../../action'

class SearchInput extends React.Component {
  state = {term: ''}
  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchCity(this.state.term);
  }
    
  render() {
    return (
        <div className="row ">
        <div className="col-3" />
        <div className="col-6 search">
          <div className="row my-1">
            <div className="input-group col-10">
              <form onSubmit = {this.onFormSubmit} >
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
    )
    }
}


const mapStateToProps = (state) => {
    return { cityList: state.citiesList };

}

export default connect(mapStateToProps,{fetchCity})(SearchInput)