import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import RecipeReviewCard from './RecipeReviewCard'

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      boxState: 'projectBoxInactive',
      color: 'black',
      width: '400px',
      height: '140px',
      padding: '15px',
      backgroundColor: 'white'
    }
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }
  activate() {
    this.setState({ boxState: 'projectBoxActive', color: 'white', backgroundColor: 'black' });
  }
  deactivate() {
    this.setState({ boxState: 'projectBoxInactivate', color: 'black', backgroundColor: 'white' })
  }
  render() {
    const { boxState } = this.state;
    const { activate, deactivate } = this;
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav />
          </div>

          <Grid container spacing={24} justify="center" alignItems='center' style={{ backgroundColor: 'white', textAlign: 'center', height: '95vh' }}>
            <Grid xs={12} style={{ color: 'black' }}>
              <h4>PROJECTS</h4>
              <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5 style={{ color: 'black', textDecoration: 'underline' }}>GitHub Repositories</h5></a>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>

              <div onMouseEnter={activate} onMouseLeave={deactivate} style={{ border: '3px solid grey', width: this.state.width, height: this.state.height, padding: this.state.padding, backgroundColor: this.state.backgroundColor }}>
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5 style={{ color: this.state.color }}>Personal Website</h5></a>
                <p style={{ color: this.state.color }}>Full stack software engineer website<br />solo project</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5 style={{ color: this.state.color }}>code</h5></a>
              </div>


            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div onMouseEnter={activate} onMouseLeave={deactivate} >
                <a href="www.purlylove.com" rel="noopener noreferrer" target="_blank"><h5>Purly Love</h5></a>
                <p>Knitting artist website</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>solo project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div className="projectBox">
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5>Six Words</h5></a>
                <p>Meditation website (under construction)</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>solo project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div className="projectBox">
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5>UnTapped Trivia</h5></a>
                <p>Bar Trivia Game website</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>Fullstack Academy team project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div className="projectBox">
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5>Clickr</h5></a>
                <p>Photo sharing website</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>Fullstack Academy solo project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div className="projectBox">
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5>williams Ponoma</h5></a>
                <p>Online Store website</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>Fullstack Academy team project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <div className="projectBox">
                <a href="ADDRESS" rel="noopener noreferrer" target="_blank"><h5>Senior Enrichment Project</h5></a>
                <p>School management website</p>
                <a href="ENTER ADDRESS" rel="noopener noreferrer" target="_blank"><h5>code</h5></a>
                <p>Fullstack Academy solo project</p>
              </div>
            </Grid>
            <Grid item xs={4} container justify="center" alignItems='center'>
              <RecipeReviewCard />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Portfolio;
