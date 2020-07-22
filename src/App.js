import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import Welcome from './components/index';
import Hello from './components/hello';
import Reverse from './components/reverser';
import ToDo from './components/todo';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Welcome} exact/>
            <Route path="/hello" component={Hello} exact />
            <Route path="/reverse" component={Reverse} exact/>
            <Route path="/todo" component={ToDo} exact/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
