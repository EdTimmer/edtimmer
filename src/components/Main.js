import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio'
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/*<Route render={({location}) => <Nav path={location.pathname} />} />*/}
          <div className="container-fluid">
            <Switch>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
