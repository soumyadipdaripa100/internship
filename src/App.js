import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import Sidebar from './containers/Sidebar/Sidebar'
import Main from './containers/Main/Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid className="App">
        <Row>
          <Col sm={2} className="Fixed">
            <Sidebar />
          </Col>
          <Col sm={10} className="MainDiv">
            <Main />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
