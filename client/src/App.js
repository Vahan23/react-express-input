import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import SignIn from './SignIn';

class App extends Component {

  
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <SignIn/>
      </div>
    );
  }
}

export default App;
