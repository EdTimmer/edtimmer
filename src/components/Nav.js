import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import pdf from '../resume.pdf';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            home: 'white',
            projects: 'white',
            about: 'white',
            resume: 'white'
        }
        this.selectHome = this.selectHome.bind(this);
        this.selectProjects = this.selectProjects.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectResume = this.selectResume.bind(this);
        this.unselect = this.unselect.bind(this);
    }

    selectHome() {
        this.setState({
            home: 'white',
            projects: 'grey',
            about: 'grey',
            resume: 'grey'
        })
    }

    selectProjects() {
        this.setState({
            home: 'grey',
            projects: 'white',
            about: 'grey',
            resume: 'grey'
        })
    }

    selectAbout() {
        this.setState({
            home: 'grey',
            projects: 'grey',
            about: 'white',
            resume: 'grey'
        })
    }

    selectResume() {
        this.setState({
            home: 'grey',
            projects: 'grey',
            about: 'grey',
            resume: 'white'
        })
    }

    unselect() {
        this.setState({
            home: 'white',
            projects: 'white',
            about: 'white',
            resume: 'white'
        })
    }
    render() {
        return (
            <Grid container spacing={24} justify="center" style={{ textDecoration: 'none', padding: '20px' }}>
                <Grid item xs={6}>
                    {
                        this.props.header ? (
                            <Link to={`/`} className='sectionHeader'>{this.props.header}</Link>
                        ) : (null)
                    }

                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <Link to={`/`} style={{ color: this.state.home, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectHome} onMouseLeave={this.unselect}>HOME</Link>
                    <Link to={`/about`} style={{ color: this.state.about, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectAbout} onMouseLeave={this.unselect}>ABOUT</Link>
                    <Link to={`/portfolio`} style={{ color: this.state.projects, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectProjects} onMouseLeave={this.unselect}>PORTFOLIO</Link>
                    <Link to={`/resume`} style={{ color: this.state.resume, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectResume} onMouseLeave={this.unselect}>RESUME</Link>
                    {/*<a href={pdf} style={{ color: this.state.resume, textDecoration: 'none', padding: '0 20px 0 20px' }} rel="noopener noreferrer" target="_blank" onMouseEnter={this.selectResume} onMouseLeave={this.unselect}>RESUME</a>*/}
                </Grid>
            </Grid>
        );
    }
}

export default Nav;