import React from 'react';
import '../styling/App.css';
import ReactDOM from 'react-dom';
import CreatureCompendium from './creature_compendium';
import * as ReactBootStrap from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super();
    this._displayCompendium = this._displayCompendium.bind(this);
  }

  _displayCompendium() {
    ReactDOM.render(<CreatureCompendium />, document.getElementById('creature-compendium'));
  }

  render() {
    return (
      <div className="App" id='main-app'>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand>Dungeon Dashboard</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link >Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this._displayCompendium}> Creature Compendium </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <div id='creature-compendium'>
      </div>
      </div>
    );
  }
}

export default App;
