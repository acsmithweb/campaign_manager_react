import React from 'react';
import '../styling/App.css';
import ObjectCompendium from './compendium.js';
import * as ReactBootStrap from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {creatureCompendiumVisible: false, spellCompendiumVisible: false, storedStatBlocks: [], storedSpells: [], storedObjects: {stat_blocks: [], spells: []}}
    this._toggleCreatureCompendium = this._toggleCreatureCompendium.bind(this);
    this.toggleSpellCompendium = this.toggleSpellCompendium.bind(this);
    this.addObjectToStorage = this.addObjectToStorage.bind(this);
  }

  _toggleCreatureCompendium(){
    this.setState({spellCompendiumVisible: false});
    this.setState({creatureCompendiumVisible: !(this.state.creatureCompendiumVisible)});
  }

  toggleSpellCompendium(){
    this.setState({creatureCompendiumVisible: false});
    this.setState({spellCompendiumVisible: !(this.state.spellCompendiumVisible)});
  }

  addObjectToStorage(objects, object_type){
    switch(object_type){
      case 'stat_blocks':
        var total_items = this.state.storedStatBlocks.concat(objects);
        total_items = [...new Set([...this.state.storedStatBlocks,...objects])]
        this.setState({storedStatBlocks: total_items});
        break;
      case 'spells':
        var total_items = this.state.storedSpells.concat(objects);
        total_items = [...new Set([...this.state.storedSpells,...objects])]
        this.setState({storedSpells: total_items});
        break;
    }
  }

  creatureCompendiumView(){
    return (this.state.creatureCompendiumVisible ? <ObjectCompendium object_type={'stat_blocks'} objForm={'StatBlockForm'} obj_component={'StatBlockComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells}/> : null);
  }

  spellCompendiumView(){
    return (this.state.spellCompendiumVisible ? <ObjectCompendium object_type={'spells'} objForm={'SpellForm'} obj_component={'SpellBlockComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells}/> : null);
  }

  render() {
    return (
      <div className="App" id='main-app'>
      <ReactBootStrap.Navbar bg="light" expand="lg" fixed="top">
        <ReactBootStrap.Navbar.Brand>Dungeon Dashboard</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this._toggleCreatureCompendium}> Creature Compendium </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this.toggleSpellCompendium}> Spell Compendium </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        <div>
          {this.creatureCompendiumView()}
          {this.spellCompendiumView()}
        </div>
      </div>
    );
  }
}

export default App;
