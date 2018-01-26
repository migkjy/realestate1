import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

import { RealEstates } from './../api/real-estates';
// import { reLists } from './../fixtures/fixtures';
import RealEstate from './RealEstate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderRealEstatesList() {
    // const reLists = realEstates.find().fetch();
    return this.props.reLists.map(list => (<RealEstate key={list._id} list={list} />));
  }
  render() {
    return (
      <div>
        <div>
          <Blaze template="loginButtons" />
        </div>
        <p>Hello!! now testing</p>
        <ul>
          {this.renderRealEstatesList()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => ({
  reLists: RealEstates.find({}).fetch(),
}))(App);
