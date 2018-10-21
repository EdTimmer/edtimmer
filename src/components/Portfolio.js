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

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'PORTFOLIO'} />
          </div>

          <Grid container spacing={24} justify="center" alignItems='center' style={{ backgroundColor: 'whitesmoke', padding: '0' }}>
            {/*<Grid xs={12} style={{ textAlign: 'center' }}>
              <span className='sectionHeader'>PORTFOLIO</span>
    </Grid>*/}
            <Grid item xs={4} container justify="center" alignItems='center'>
              <PersonalWebsite />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <PurlyLove />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <SixWords />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <UntappedTrivia />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <Clickr />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <WilliamsPomona />
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <Sep />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Portfolio;
