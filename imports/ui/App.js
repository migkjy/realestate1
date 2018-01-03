import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

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
        <ul>
          {this.renderRealEstatesList()}
        </ul>
        <p>Hello!!</p>
        <div>
          <Form horizontal onSubmit={() => {}}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                New Asset
              </Col>
              <Col sm={6}>
                <FormControl type="text" placeholder="Type to add new Asset" />
              </Col>
              <Col sm={2}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default withTracker(() => ({
  reLists: RealEstates.find({}).fetch(),
}))(App);
