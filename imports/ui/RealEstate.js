import React from 'react';

export default class RealEstate extends React.Component {
  render() {
    return <li>{this.props.list.name}</li>;
  }
}
