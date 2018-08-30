import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Agencies from './pages/Agencies';
import Cars from './pages/Cars';
import Login from './pages/Login';
import pageOwnerAgency from './pages/LoginAu';

class App extends Component {
  constructor() {
    super()

    this.state = {
      allInfo: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/agencies')
      .then(res => (this.setState({ allInfo: res.data })))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className='father'>
        <Router>
          <Switch>
            <Route exact path="/" component={(props) => <Agencies {...props} infos={this.state.allInfo} />} />
            <Route path="/:agency/cars/:id" component={Cars} />
            <Route path="/login" component={Login} />
            <Route path="/pageOwnerAgency" component={pageOwnerAgency} />
          </Switch>
        </Router >
      </div>
    );
  }
}

export default App;
