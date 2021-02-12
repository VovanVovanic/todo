import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  onChangeInput = (e) => {
    this.props.onSearch(e.target.value)
  };
  render() {
    return (
      <input
        onChange={this.onChangeInput}
        className="form-control search-input"
        type="text"
        placeholder="Type to search record"
      />
    );
  }
}
