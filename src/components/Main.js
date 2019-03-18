import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio'
import Resume from './Resume';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
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
