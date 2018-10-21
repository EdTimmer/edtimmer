import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import PersonalWebsite from './PortfolioWebsites/PersonalWebsite';
import PurlyLove from './PortfolioWebsites/PurlyLove';
import SixWords from './PortfolioWebsites/SixWords';
import UntappedTrivia from './PortfolioWebsites/UntappedTrivia';
import Clickr from './PortfolioWebsites/Clickr';
import WilliamsPomona from './PortfolioWebsites/WilliamsPomona';
import Sep from './PortfolioWebsites/Sep';

class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'PORTFOLIO'} />
          </div>

          <Grid container spacing={24} justify="center" alignItems='center' style={{ backgroundColor: 'whitesmoke', padding: '0' }}>

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
