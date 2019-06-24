import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import profilephoto from '../images/profilephoto.jpg';
import github from '../images/github.svg';
import medium from '../images/medium.png';
import linkedin from '../images/linkedin.png';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'ABOUT'} />
          </div>

          <Grid container spacing={0} style={{ backgroundColor: 'white', padding: '0', height: '100%' }}>


            <Grid item xs={2} />
            <Grid item xs={2} className='about'>
              <img src={profilephoto} style={{ height: '250px' }} alt="profileimage" />
            </Grid>
            <Grid item xs={8} className='about'>

              <p className="about-line">I am a Brooklyn based full stack software engineer and a recent graduate of <a href="https://www.fullstackacademy.com" rel="noopener noreferrer" target="_blank">Fullstack Academy</a> coding bootcamp.</p>  
              
              <p className="about-line">
              Prior to going into web development I was a pharma and biotech patent attorney.  But my passion for making things prompted me to learn to code and to pursue career in web development.</p>
              
              <p className="about-line">I can be reached by email at <b>edtimmer@gmail.com</b>.</p>

              <p className="about-line">You can also find me at LinkedIn, GitHub, and Medium:</p>
              
              <div style={{ paddingTop: '10px' }}>
                  <span style={{ padding: '0 30px 0 30px' }}><a href="https://www.linkedin.com/in/edtimmer" rel="noopener noreferrer" target="_blank"><img src={linkedin} width={50} /></a></span>

                  <span style={{ padding: '0 30px 0 30px' }}><a href="https://github.com/EdTimmer" rel="noopener noreferrer" target="_blank"><img src={github} width={50} /></a></span>

                  <span style={{ padding: '0 30px 0 30px' }}><a href="https://medium.com/@edtimmer" rel="noopener noreferrer" target="_blank"><img src={medium} width={50} /></a></span>
              </div>

            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
