import React, { Component } from 'react';

export class Filter extends Component {

    trowValue = (e) => {
        const value = e.currentTarget.value;
        this.props.onChange(value);
    }
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.trowValue} />
      </>
    );
  }
}
export default Filter;
