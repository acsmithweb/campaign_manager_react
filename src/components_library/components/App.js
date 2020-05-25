import React from 'react';
import '../styling/App.css';
import CreatureCompendium from './creature_compendium';
import * as ReactBootStrap from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {compendiumVisible: false}
    this._toggleCompendium = this._toggleCompendium.bind(this);
  }

  _toggleCompendium(){
    this.setState({compendiumVisible: !(this.state.compendiumVisible)});
  }

  compendiumView(){
    return (this.state.compendiumVisible ? <CreatureCompendium /> : null);
  }

  render() {
    return (
      <div className="App" id='main-app'>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand>Dungeon Dashboard</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this._toggleCompendium}> Creature Compendium </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        <div>
          {this.compendiumView()}
        </div>
      </div>
    );
  }
}

export default App;
