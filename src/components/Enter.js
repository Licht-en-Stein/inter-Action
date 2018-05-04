import React from 'react';
import logo from '../logo.svg';
import '../App.css';


const Enter = props => {

  
    return (
        <div className="Enter">
          <img src={logo} className="App-logo" alt="logo" onClick={props.show} />
        </div>
    );
  
}

export default Enter;

