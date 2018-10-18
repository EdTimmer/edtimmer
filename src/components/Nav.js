import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import pdf from '../resume.pdf';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            skills: 'white',
            projects: 'white',
            education: 'white',
            resume: 'white'
        }
        this.selectSkills = this.selectSkills.bind(this);
        this.selectProjects = this.selectProjects.bind(this);
        this.selectEducation = this.selectEducation.bind(this);
        this.selectResume = this.selectResume.bind(this);
        this.unselect = this.unselect.bind(this);
    }

    selectSkills() {
        this.setState({
            skills: 'white',
            projects: 'grey',
            education: 'grey',
            resume: 'grey'
        })
    }

    selectProjects() {
        this.setState({
            skills: 'grey',
            projects: 'white',
            education: 'grey',
            resume: 'grey'
        })
    }

    selectEducation() {
        this.setState({
            skills: 'grey',
            projects: 'grey',
            education: 'white',
            resume: 'grey'
        })
    }

    selectResume() {
        this.setState({
            skills: 'grey',
            projects: 'grey',
            education: 'grey',
            resume: 'white'
        })
    }

    unselect() {
        this.setState({
            skills: 'white',
            projects: 'white',
            education: 'white',
            resume: 'white'
        })
    }
    render() {
        return (
            <Grid container spacing={24} justify="center" style={{ backgroundColor: 'transparent', textDecoration: 'none', padding: '20px' }}>
                <Grid item xs={6} />
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <Link to={`/skills`} style={{ color: this.state.skills, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectSkills} onMouseLeave={this.unselect}>SKILLS</Link>
                    <Link to={`/projects`} style={{ color: this.state.projects, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectProjects} onMouseLeave={this.unselect}>PROJECTS</Link>
                    <Link to={`/education`} style={{ color: this.state.education, textDecoration: 'none', padding: '0 20px 0 20px' }} onMouseEnter={this.selectEducation} onMouseLeave={this.unselect}>EDUCATION</Link>
                    <a href={pdf} style={{ color: this.state.resume, textDecoration: 'none', padding: '0 20px 0 20px' }} rel="noopener noreferrer" target="_blank" onMouseEnter={this.selectResume} onMouseLeave={this.unselect}>RESUME</a>
                </Grid>
            </Grid>
        );
    }
}

export default Nav;