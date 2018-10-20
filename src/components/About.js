import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './Nav';

import gmail from '../images/gmail.png';
import github from '../images/github.svg';
import medium from '../images/medium.png';
import linkedin from '../images/linkedin.png'

class About extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1A">
          <div>
            <Nav header={'ABOUT'} />
          </div>

          <Grid container spacing={24} style={{ backgroundColor: 'white', padding: '0', height: '95vh' }}>
            <Grid xs={12} style={{ textAlign: 'center' }} className="aboutText">
              <div style={{ padding: '30px' }}>
                <p>
                  I am a full stack software engineer and I can say that because I survived <a href="https://www.fullstackacademy.com" rel="noopener noreferrer" target="_blank">Fullstack Academy</a> coding boot camp.
                </p>
                <p>
                  Currently, I work part-time as a Junior Developer at a startup and I am also looking for full-time opportunities.
                </p>
                <p>
                  In addition to coding, I have 16 years of experience as a patent attorney.
                </p>
              </div>

              <div style={{ padding: '30px' }}>
                <p>I can be reached by email at <b>edtimmer@gmail.com</b></p>
              </div>

              <div style={{ padding: '30px' }}>
                <p>You can also find me at LinkedIn, GitHub, and Medium:</p>

                <div style={{ padding: '5px' }}>
                  <span style={{ padding: '30px' }}><a href="https://www.linkedin.com/in/edtimmer" rel="noopener noreferrer" target="_blank"><img src={linkedin} width={50} /></a></span>

                  <span style={{ padding: '30px' }}><a href="https://github.com/EdTimmer" rel="noopener noreferrer" target="_blank"><img src={github} width={50} /></a></span>

                  <span style={{ padding: '30px' }}><a href="https://medium.com/@edtimmer" rel="noopener noreferrer" target="_blank"><img src={medium} width={50} /></a></span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
