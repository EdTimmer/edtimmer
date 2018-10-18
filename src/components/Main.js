import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
// import Nav from './Nav';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/*<Route render={({location}) => <Nav path={location.pathname} />} />*/}
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
        </div>        
      </HashRouter>
    )
  }
}

export default Main;
