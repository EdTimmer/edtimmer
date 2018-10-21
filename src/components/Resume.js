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
              <span className='resHeader'>Technologies</span>
            </Grid>
            <Grid xs={8}>
              <Grid container spacing={24} style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                <Grid xs={3} className='resume'>
                  <span>
                    <span className='headerTwo'>Proficient</span>
                    <ul className='list'>
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
                    <span className='headerTwo'>Knowledgeable</span>
                    <ul className='list'>
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
                    <span className='headerTwo'>Some Experience</span>
                    <ul className='list'>
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
              <span className='resHeader'>Work Experience</span>
            </Grid>
            <Grid xs={8} className='resume'>

              <span className='headerTwo'>Junior Developer (part-time)</span>
              <p className='jobCompany'>(Confidential Company)<span className='jobLocation'>, New York, NY, 08/2018 - Present</span></p>
              <p className='jobDescription'>
                Developing Jest unit testing for a mobile social networking application built with React Native, GraphQL, Apollo, and AWS.
                </p>
              <p className='jobDescription postPadding'>
                Note: Company is operating in stealth mode and wishes to remain anonymous. Employment can be verified upon request.
              </p>

              <span className='headerTwo'>Contract Attorney</span>
              <p className='jobCompany'>Various Companies<span className='jobLocation'>, New York, NY, 08/2017 - Present</span></p>
              <p className='jobDescription postPadding'>
                Assist with litigation on temporary projects.
              </p>

              <span className='headerTwo'>Counsel</span>
              <p className='jobCompany'>Heslin Rothenberg Farley & Mesiti<span className='jobLocation'>, Albany, NY, 02/2015 - 06/2017</span></p>
              <p className='jobDescription postPadding'>
                Secured patents for pharmaceutical and biotechnology inventions.
              </p>

              <span className='headerTwo'>Senior Attorney</span>
              <p className='jobCompany'>Goodwin Procter<span className='jobLocation'>, New York, NY, 08/2006 - 02/2015</span></p>
              <p className='jobDescription postPadding'>
                Analyzed pharmaceutical and biotechnology patents for litigation.
              </p>

              <span className='headerTwo'>Associate</span>
              <p className='jobCompany'>Heslin Rothenberg Farley & Mesiti<span className='jobLocation'>, Albany, NY, 01/2004 - 08/2006</span></p>
              <p className='jobDescription postPadding'>
                Secured patents for pharmaceutical and biotechnology inventions.
              </p>

              <span className='headerTwo postPadding'>Patent Attorney</span>
              <p className='jobCompany'>CuraGen Corporation<span className='jobLocation'>, New Haven, CT, 12/2002 - 12/2003</span></p>
              <p className='jobDescription postPadding'>
                Secured patents for biotechnology inventions and obtained trademark registrations.
              </p>

              <span className='headerTwo'>Associate</span>
              <p className='jobCompany'>Lambert & Associates<span className='jobLocation'>, Boston, MA, 03/2001 - 11/2002</span></p>
              <p className='jobDescription postPadding'>
                Secured patents for mechanical inventions and obtained trademark registrations.
              </p>
            </Grid>

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Bar Admissions</span>
            </Grid>
            <Grid xs={8} className='resume'>
              <p className='bar'>New York State</p>
              <p className='bar'>U.S. Patent and Trademark Office</p>
            </Grid>

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Education</span>
            </Grid>
            <Grid xs={8} className='resume'>
              {/*<span className='headerTwo'>full stack software engineer</span>*/}
              <p className='jobCompany'>Fullstack Academy of Code<span className='jobLocation'>, New York, NY, 1/2018 - 6/2018</span></p>
              <p className='jobDescription postPadding' style={{ marginRight: "300px" }}>
                <a href="https://www.fullstackacademy.com" rel="noopener noreferrer" target="_blank">Fullstack Academy of Code</a> is a software engineering coding bootcamp with a rigorous admissions process. Through an advanced curriculum and project based structure, students learn full stack JavaScript while immersed in the latest web technologies such as Node.js, React, and SQL.
              </p>

              <span className='headerTwo'>juris doctor in law</span>
              <p className='jobCompany'>Cardozo School of Law<span className='jobLocation'>, New York, NY, 09/1997 - 06/2000</span></p>
              <p className='jobDescription postPadding' style={{ marginRight: "300px" }}>
                GPA: 3.02
              </p>

              <span className='headerTwo'>master of arts in biology</span>
              <p className='jobCompany'>Boston University<span className='jobLocation'>, Boston, MA, 09/1995 - 06/1997</span></p>
              <p className='jobDescription postPadding' style={{ marginRight: "300px" }}>
                GPA: 3.86
              </p>

              <span className='headerTwo'>bachelor of arts in biology</span>
              <p className='jobCompany'>New York University<span className='jobLocation'>, New York, NY, 09/1991 - 06/1995</span></p>
              <p className='jobDescription' style={{ marginRight: "300px" }}>
                GPA: 3.61
              </p>
            </Grid>

            <Grid xs={2} />
            <Grid xs={2} className='resume'>
              <span className='resHeader'>Languages</span>
            </Grid>
            <Grid xs={8} className='resume'>
              <p className='bar'>English</p>
              <p className='bar'>Russian</p>
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
