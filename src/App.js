import React, { Component } from 'react';
import './App.css';

class App extends Component {
  otherFoo = () => 'BUR';
  render() {
    const name = 'Jane Doe';
    const foo = () => 'Bar';
    const loading = false;
    const showName = false;

    return (
      <div className='App'>
        <h1>Hello {showName && name}</h1>
        <h2>This is {foo()}</h2>
        <h2>And this is {this.otherFoo()}</h2>
        {loading ? <h4>Loading...</h4> : <h4>Loaded!</h4>}
      </div>
    );
  }
}

export default App;
