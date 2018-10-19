import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import PersonalWebsite from './PersonalWebsite';
import PurlyLove from './PurlyLove';
import SixWords from './SixWords';
import UntappedTrivia from './UntappedTrivia';
import Clickr from './Clickr';
import WilliamsPomona from './WilliamsPomona';
import Sep from './Sep';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'CONTACT'} />
          </div>

          <Grid container spacing={24} justify="center" alignItems='center' style={{ backgroundColor: 'whitesmoke', padding: '0', height: '95vh' }}>
            <Grid xs={12} style={{ textAlign: 'center' }}>
              <span>email: edtimmer@gmail.com</span>
            </Grid>
            <Grid xs={12} style={{ textAlign: 'center' }}>
              <span>LinkedIn: <a href="https://github.com/jlp0422/capstone" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/edtimmer</a></span>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
