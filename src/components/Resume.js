import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import pdf from '../resume.pdf';
import DownloadButton from './DownloadButton';

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div>
            <Nav header={'RESUME'} />
          </div>

          <Grid container spacing={24} style={{ backgroundColor: 'white', padding: '0', height: '95vh' }}>
            {/*backgroundColor: 'whitesmoke',*/}
            <Grid xs={12} style={{ textAlign: 'center' }}>
              <DownloadButton />
            </Grid>

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Skills</span>
            </Grid>
            <Grid xs={8}>
              <Grid container spacing={24} style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                <Grid xs={3} className='resume'>
                  <span>
                    <span className='levelOfSkillHeader'>Proficient</span>
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
                <Grid xs={3} className='resume'>
                  <span>
                    <span className='levelOfSkillHeader'>Knowledgeable</span>
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
                <Grid xs={3} className='resume'>
                  <span>
                    <span className='levelOfSkillHeader'>Some Experience</span>
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

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Experience</span>
            </Grid>
            <Grid xs={8} className='resume'>
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

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Bar Admissions</span>
            </Grid>
            <Grid xs={8} className='resume'>
              <span>
                New York State
                <br />
                U.S. Patent and Trademark Office
              </span>
            </Grid>

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Education</span>
            </Grid>
            <Grid xs={8} className='resume'>
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
