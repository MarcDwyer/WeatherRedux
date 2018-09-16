import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';
import {bindActionCreators} from 'redux';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state ={
      term: ''
    };
  }
  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {

    return (
      <div className="center-me">
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Search by City"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
       />
     <span className="input-group-btn">
       <button type="submit" className="btn btn-secondary">Submit</button>
     </span>
      </form>
      </div>
    );
  }

}
function getAction(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, getAction)(SearchBar);
