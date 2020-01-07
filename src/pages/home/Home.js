import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div><Link to="/example/">Example</Link></div>
      </div>
    )
  }
}

export default Home;
