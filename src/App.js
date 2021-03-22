import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubUsers from './components/GithubUsers';
import GithubRepos from './components/GithubRepos';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/users" component={GithubUsers}/>
          <Route exact path="/repos" component={GithubRepos}/>
          <Route exact path="/github-search" component={Home}/>
          <Route path="/" component={Home}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
