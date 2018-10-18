import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import pdf from '../resume.pdf';

class Nav extends Component {
    render() {
        return (
            <Grid container spacing={24} justify="center" style={{ backgroundColor: 'transparent', color: 'white', textDecoration: 'none', padding: '20px' }}>
                <Grid item xs={8} />
                <Grid item xs={1} >
                    <Link to={`/skills`} style={{ color: 'white', textDecoration: 'none' }}>SKILLS</Link>
                </Grid>
                <Grid item xs={1} >
                    <Link to={`/projects`} style={{ color: 'white', textDecoration: 'none' }}>PROJECTS</Link>
                </Grid>
                <Grid item xs={1} >
                    <Link to={`/education`} style={{ color: 'white', textDecoration: 'none' }}>EDUCATION</Link>
                </Grid>
                <Grid item xs={1} >
                    <a href={pdf} style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer" target="_blank">RESUME</a>
                </Grid>
            </Grid>
        );
    }
}

export default Nav;