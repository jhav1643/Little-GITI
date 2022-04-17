import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Github from './Components/github';

class App extends React.Component {
  render() {
    let pageSize = 9;
    return (
      <div className='body'>
        <Router>
          <Navbar />
          <Github pageSize = {pageSize} />
        </Router>

      </div>
    );
  }
}

export default App;
