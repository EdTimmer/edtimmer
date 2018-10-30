import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import TronCalculator from './PortfolioWebsites/TronCalculator';
import PersonalWebsite from './PortfolioWebsites/PersonalWebsite';
import PurlyLove from './PortfolioWebsites/PurlyLove';
import SixWords from './PortfolioWebsites/SixWords';
import UntappedTrivia from './PortfolioWebsites/UntappedTrivia';
import Clickr from './PortfolioWebsites/Clickr';
import WilliamsPomona from './PortfolioWebsites/WilliamsPomona';
import Sep from './PortfolioWebsites/Sep';

class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="bgimg-1">
                    <div>
                        <Nav header={'PORTFOLIO'} />
                    </div>

                    <Grid container spacing={0} alignItems='center' style={{ backgroundColor: 'whitesmoke' }}>
                        {/* justify="center" alignItems='center' */}
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <TronCalculator />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <PersonalWebsite />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <PurlyLove />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <SixWords />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <UntappedTrivia />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <Clickr />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <WilliamsPomona />
                        </Grid>
                        <Grid item xs={4} container justify="center" alignItems='center' className='portfolioPadding'>
                            <Sep />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Portfolio;
