import { Meteor } from 'meteor/meteor';
import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

import { RealEstateCollection } from './../api/RealEstateCollection';
import { realEstateFixures } from '../fixtures/fixtures';

import RealEstate from './RealEstate';
import Request from './Request';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  renderApi() {
    // this.setState({
    //   data: Meteor.call('api.requestData', (error, success) => success),
    // });
    // console.log(this.state.data);
    this.props.apiData.map((item, index) => (<p key={index}>{item}</p>));
    console.log('ready: ', this.props.loaded, this.props.apiData);
  }
  renderLists = lists => lists.map((key, index) => <li key={index}>{`${key.name} : ${key.content}`}</li>)
  renderRealEstatesList = lists => lists.map(list => (<RealEstate key={list._id} list={list} />))
  render() {
    return (
      <div >
        <div >
          <Blaze template="loginButtons" />
        </div>
        <p>Hello!!now testing2</p>
        <h4>{realEstateFixures.name}</h4>
        <h5>{realEstateFixures.data[0].name}</h5>
        <ul>
          {this.renderLists(realEstateFixures.data[0].fields)}
          {/* <li>{`${realEstateFixures.data[0].fields[0].name} : ${realEstateFixures.data[0].fields[0].content}`}</li> */}
        </ul>
        <Request />
        <div>{this.renderApi()}</div>
      </div>
    );
  }
}

export default withTracker((props) => {
  let ready = false;
  const apiData = [];

  Meteor.call('api.requestData', (error, success) => {
    if (error) {
      console.log('error', error);
    }
    if (success) {
      ready = true;
      apiData.push(success);
      console.log(apiData);
    }
  });
  return {
    loaded: ready,
    apiData: apiData || [],
    realEstateList: RealEstateCollection.find({}).fetch(),
  };
})(App);
