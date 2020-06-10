import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return(
        <div>
          <h1>
            HATS PAGE
          </h1>
        </div>
        );
}

function App(){
  return(
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/' component={HatsPage}/>
      </Switch>
    );
  }

export default App;
