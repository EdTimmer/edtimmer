import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio'
// import About from './About';
// import About2 from './About2';
import Resume from './Resume';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/*<Route render={({location}) => <Nav path={location.pathname} />} />*/}
          <div className="container-fluid">
            <Switch>
              <Route exact path="/portfolio" component={Portfolio} />
              {/*<Route exact path="/about" component={About2} />*/}
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
