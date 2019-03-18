import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            home: 'white',
            about: 'white',
            portfolio: 'white',
            resume: 'white'
        }
        this.selectHome = this.selectHome.bind(this);
        this.selectPortfolio = this.selectPortfolio.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectResume = this.selectResume.bind(this);
        this.unselect = this.unselect.bind(this);
    }

    selectHome() {
        this.setState({
            home: 'white',
            about: 'grey',
            portfolio: 'grey',
            resume: 'grey'
        })
    }


    selectAbout() {
        this.setState({
            home: 'grey',
            about: 'white',
            portfolio: 'grey',
            resume: 'grey'
        })
    }

    selectPortfolio() {
        this.setState({
            home: 'grey',
            about: 'grey',
            portfolio: 'white',
            resume: 'grey'
        })
    }

    selectResume() {
        this.setState({
            home: 'grey',
            about: 'grey',
            portfolio: 'grey',
            resume: 'white'
        })
    }

    unselect() {
        this.setState({
            home: 'white',
            about: 'white',
            portfolio: 'white',
            resume: 'white'
        })
    }
    render() {
        return (
            <Grid container spacing={0} justify="center" style={{ textDecoration: 'none', padding: '20px' }}>
                <Grid item xs={6}>
                    {
                        this.props.header ? (
                            <span className='sectionHeader'>{this.props.header}</span>
                        ) : (null)
                    }
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <div style={{ paddingTop: '10px' }}>

                        <Link to={`/`} style={{ color: this.state.home, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectHome} onMouseLeave={this.unselect}>HOME</Link>

                        <Link to={`/about`} style={{ color: this.state.about, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectAbout} onMouseLeave={this.unselect}>ABOUT</Link>

                        <Link to={`/portfolio`} style={{ color: this.state.portfolio, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectPortfolio} onMouseLeave={this.unselect}>PORTFOLIO</Link>

                        <Link to={`/resume`} style={{ color: this.state.resume, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectResume} onMouseLeave={this.unselect}>RESUME</Link>

                    </div>

                </Grid>
            </Grid>
        );
    }
}

export default Nav;