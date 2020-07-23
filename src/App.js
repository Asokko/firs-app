import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Weather from './containers/weather/weather'
import Auth from './containers/Auth/Auth'
import Layout from './hoc/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{
  render(){
    return (
      <Layout>
        <Switch>
            <Route path="/weather" component={Weather} />
            <Route path="/" component={Auth} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
