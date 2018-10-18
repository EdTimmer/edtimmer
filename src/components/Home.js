import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <Nav />
          <div className="captionTwo">
            <span className="borderTwo" style={{ fontSize: '40px' }}>EDWARD TIMMER</span>
            <br />
            <span className="borderTwo" style={{ fontSize: '20px' }}>full stack software engineer</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
