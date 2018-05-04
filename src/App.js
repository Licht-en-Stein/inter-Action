import React, { Component } from 'react';
import './App.css';
import Enter from './components/Enter';
import First from './components/First';

class App extends Component {

  state = {
    viewSelector: true
  }

  show = () => {
    console.log('clicked')
    this.setState(prevState => {
        return {viewSelector: !prevState.viewSelector}
    })
  }

  render() {
    let whatToRender;
    this.state.viewSelector ? whatToRender = (<Enter />) : whatToRender = (<First />)
    return (
      <div className="App">
       <button onClick={this.show}>H</button>
       {whatToRender}
      </div>
    );
  }
}

export default App;
