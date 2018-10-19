import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import pdf from '../resume.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'RESUME'} />
          </div>

          <Grid container spacing={24} style={{ backgroundColor: 'whitesmoke', padding: '0', height: '95vh' }}>

            <Grid xs={12} style={{ textAlign: 'center' }}>
              <a href={pdf} rel="noopener noreferrer" target="_blank" onMouseEnter={this.selectResume} onMouseLeave={this.unselect}>DOWNLOAD RESUME</a>
            </Grid>

            <Grid xs={4} className='resumeSection'>
              <span>CONTACT</span>
            </Grid>
            <Grid xs={8} className='resumeDescription'>
              <span>edtimmer@gmail.com</span>
              <br />
              <a href="https://github.com/jlp0422/capstone" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </Grid>


            <Grid xs={4} className='resumeSection'>
              <span>SKILLS</span>
            </Grid>
            <Grid xs={8}>
              <Grid container spacing={24} style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                <Grid xs={3} className='resumeDescription'>
                  <span>
                    <b>Proficient</b>
                    <ul style={{ paddingLeft: '10px', paddingTop: '0', marginTop: '0' }}>
                      <li>JavaScript (ES5/ES6)</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Sequelize</li>
                      <li>PostgreSQL</li>
                      <li>React</li>
                      <li>React-Redux</li>
                      <li>Jest</li>
                      <li>Enzyme</li>
                      <li>Axios</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Git</li>
                    </ul>
                  </span>
                </Grid>
                <Grid xs={3} className='resumeDescription'>
                  <span>
                    <b>Knowledgeable</b>
                    <ul style={{ paddingLeft: '10px', paddingTop: '0', marginTop: '0' }}>
                      <li>React Native</li>
                      <li>GraphQL</li>
                      <li>JWT</li>
                      <li>Stripe</li>
                      <li>Moment</li>
                      <li>Materialize</li>
                      <li>Material-UI</li>
                      <li>Heroku</li>
                    </ul>
                  </span>
                </Grid>
                <Grid xs={3} className='resumeDescription'>
                  <span>
                    <b>Some Experience</b>
                    <ul style={{ paddingLeft: '10px', paddingTop: '0', marginTop: '0' }}>
                      <li>Mocha</li>
                      <li>Chai</li>
                      <li>Socket.IO</li>
                    </ul>
                  </span>
                </Grid>
                <Grid xs={3} />
              </Grid>
            </Grid>

            <Grid xs={4} className='resumeSection'>
              <span>EXPERIENCE</span>
            </Grid>
            <Grid xs={8} className='resumeDescription'>
              <span>
                (Confidential Company), New York, NY - Junior Developer (part-time)
                <br />
                Developing Jest unit testing for a mobile social networking application built with React Native, GraphQL, Apollo, and AWS.
                <br />
                Note: Company is operating in stealth mode and wishes to remain anonymous.  Employment can be verified upon request.
              </span>
              <br />
              <span>
                Various Companies, New York, NY - Contract Attorney
                <br />
                Assist with litigation on temporary projects
              </span>
              <br />
              <span>
                Heslin Rothenberg Farley & Mesiti, Albany, NY - Counsel
                <br />
                Secured patents for pharmaceutical and biotechnology inventions.
              </span>
              <br />
              <span>
                Goodwin Procter, New York, NY - Senior Attorney
                <br />
                Analyzed pharmaceutical and biotechnology patents for litigation.
              </span>
              <br />
              <span>
                Heslin Rothenberg Farley & Mesiti, Albany, NY - Associate
                <br />
                Secured patents for pharmaceutical and biotechnology inventions.
              </span>
              <br />
              <span>
                CuraGen Corporation, New Haven, CT - Patent Attorney
                <br />
                Secured patents for biotechnology inventions and obtained trademark registrations.
              </span>
              <br />
              <span>
                Lambert & Associates, Boston, MA - Associate
                <br />
                Secured patents for mechanical inventions and obtained trademark registrations.
              </span>
            </Grid>

            <Grid xs={4} className='resumeSection'>
              <span>BAR ADMISSIONS</span>
            </Grid>
            <Grid xs={8} className='resumeDescription'>
              <span>
                New York State
                <br />
                U.S. Patent and Trademark Office
              </span>
            </Grid>

            <Grid xs={4} className='resumeSection'>
              <span>EDUCATION</span>
            </Grid>
            <Grid xs={8} className='resumeDescription'>
              <span>
                Fullstack Academy of Code, New York, NY
              </span>
              <br />
              <span>
                Cardozo School of Law, New York, NY - J.D. / GPA: 3.02
              </span>
              <br />
              <span>
                Boston University, Boston, MA - M.A. in Biology / GPA: 3.86
              </span>
              <br />
              <span>
                New York University, New York, NY - B.A. with Honors in Biology / GPA: 3.61
              </span>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
