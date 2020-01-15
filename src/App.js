import React, { Component, Fragment } from 'react';
// import {Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './Style.css';
import { Header, Footer } from './Components/Reusables/Hf';
import Landing from './Components/Landing/Landing';
import Main from './Components/Body/Main';
import HamB from './Components/Hambuger/HamB';
import BackDrop from './Components/Hambuger/BackDrop'
import FunFact from './Components/FunFact/FunFact';
import Work from './Components/Work/Work';

export default class App extends Component {
  state = {
    HamBOpen: false
  };

  hamBToggle = () => {
    this.setState((prevState) => {
      return { HamBOpen: !prevState.HamBOpen };
    });
  };

  closeBackDrop = () => {
    this.setState({ HamBOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.HamBOpen) {
      backDrop = <BackDrop click={this.closeBackDrop} />;
    }

    return (
      <React.Fragment>
        <Header hamBClick={this.hamBToggle} />
        <HamB show={this.state.HamBOpen} />
        {backDrop}
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/main' component={Main} />
          <Route path='/funfact' component={FunFact} />
          <Route path='/work' component={Work} />
        </Switch>
        <Footer />
      </React.Fragment>

    );
  }
}