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
              <Grid container spacing={24}>
                <Grid xs={4} className='resumeDescription'>
                  <span>
                  <b>Proficient</b>
                  <br />JavaScript (ES5/ES6)<br />Node<br />Express<br />Sequelize<br />PostgreSQL<br />React<br />React-Redux<br />Jest<br />Enzyme<br />Axios<br />HTML<br />CSS<br />Git<br />
                  </span>
                </Grid>
                <Grid xs={4} className='resumeDescription'>
                  <span>
                  <b>Knowledgeable</b>
                  <br />GraphQL<br />React Native<br />JWT<br />Stripe<br />Moment<br />Heroku<br />Materialize<br />Material-UI
                  </span>
                </Grid>
                <Grid xs={4} className='resumeDescription'>
                  <span>
                  <b>Some Experience</b>
                  <br />Mocha<br />Chai<br />Socket.IO
                  </span>
                </Grid>
              </Grid>
            </Grid>


            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>EXPERIENCE</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>
              (Confidential Company), New York, NY - Junior Developer (part-time)
Developing Jest unit testing for a mobile social networking application built with React Native, GraphQL, Apollo, and AWS.  
Note: Company is operating in stealth mode and wishes to remain anonymous.  Employment can be verified upon request.

Bar Admissions: New York State, U.S. Patent and Trademark Office
Various Companies, New York, NY - Contract Attorney                       
Assist with litigation on temporary projects.
Heslin Rothenberg Farley & Mesiti, Albany, NY - Counsel                       
Secured patents for pharmaceutical and biotechnology inventions. 
Goodwin Procter, New York, NY - Senior Attorney                                        
Analyzed pharmaceutical and biotechnology patents for litigation.
Heslin Rothenberg Farley & Mesiti, Albany, NY - Associate                      
Secured patents for pharmaceutical and biotechnology inventions. 
CuraGen Corporation, New Haven, CT - Patent Attorney                           
Secured patents for biotechnology inventions and obtained trademark registrations. 
Lambert & Associates, Boston, MA - Associate                                              
Secured patents for mechanical inventions and obtained trademark registrations.

              
              </span>
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>BAR ADMISSION</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>Description</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>EDUCATION</span>
            </Grid>
            <Grid xs={6} style={{ textAlign: 'center' }}>
              <span>Description</span>

Fullstack Academy of Code, New York, NY 
Cardozo School of Law, New York, NY - J.D. / GPA: 3.02
Boston University, Boston, MA - M.A. in Biology / GPA: 3.86
New York University, New York, NY - B.A. with Honors in Biology / GPA: 3.61  

            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
