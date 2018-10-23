import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
// import fossil from '../images/fossil.jpg'
// import PortfolioButton from './Buttons/PortfolioButton';
// import ResumeButton from './Buttons/ResumeButton';

import github from '../images/github.svg';
import medium from '../images/medium.png';
import linkedin from '../images/linkedin.png';
import downarrow from '../images/down2.png';

// className='bgimg-1B'
class Home extends Component {
    render() {
        return (
            <div>
                <div className="bgimg-1">
                    {/*<Nav style={{ backgroundColor: 'transparent' }} />*/}

                    <div className="captionTwo">
                        <span className="borderTwo" style={{ fontSize: '40px' }}>EDWARD TIMMER</span>
                        <br />
                        <span className="borderTwo" style={{ fontSize: '20px' }}>full stack software engineer</span>
                    </div>

                    {/*<div className='captionArrow'>
                        <img src={downarrow} width={20} />
                        <p style={{ color: 'white' }}><i>please scroll down</i></p>
                    </div>*/}


                </div>

                <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '20px 10px 20px 5px' }}>
                    <span className='resHeader' style={{ textAlign: 'center' }}>About</span>
                    <p>I am a Brooklyn based full stack software engineer and a recent survivor of <a href="https://www.fullstackacademy.com" rel="noopener noreferrer" target="_blank">Fullstack Academy</a> coding bootcamp</p>
                    <p>
                        I work part-time as a Junior Developer at a startup and I am also looking for full-time opportunities
                    </p>
                    <div style={{ paddingTop: '10px' }}>

                    </div>
                    <Link to={`/portfolio`} style={{ paddingRight: '30px' }}>PORTFOLIO</Link>
                    <Link to={`/resume`} style={{ paddingLeft: '30px' }}>RESUME</Link>
                </div>

                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Additional Experience</span>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '40px 80px' }}>
                        <p>
                            I have 16 years of experience as a pharma and biotech patent attorney
              </p>
                    </div>
                </div>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Contact</span>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '20px 0 20px 0' }}>
                        <div>
                            <p>I can be reached by email at <b>edtimmer@gmail.com</b></p>
                            <p>You can also find me at LinkedIn, GitHub, and Medium:</p>
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <span style={{ padding: '0 30px 0 30px' }}><a href="https://www.linkedin.com/in/edtimmer" rel="noopener noreferrer" target="_blank"><img src={linkedin} width={50} /></a></span>

                            <span style={{ padding: '0 30px 0 30px' }}><a href="https://github.com/EdTimmer" rel="noopener noreferrer" target="_blank"><img src={github} width={50} /></a></span>

                            <span style={{ padding: '0 30px 0 30px' }}><a href="https://medium.com/@edtimmer" rel="noopener noreferrer" target="_blank"><img src={medium} width={50} /></a></span>
                        </div>
                    </div>
                </div>

                <div className="bgimg-1">
                    <Nav style={{ backgroundColor: 'transparent' }} />
                    <div className="captionThree">
                        <span className="borderTwo" style={{ fontSize: '20px' }}>thank you for visiting</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
