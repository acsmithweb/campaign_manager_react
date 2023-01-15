import React from 'react';
import '../styling/App.css';
import ObjectCompendium from './compendium.js';
import CharacterSheetComponent from './character_sheet_component.js'
import * as ReactBootStrap from "react-bootstrap"
import {get, get_with_filter} from '../../js/dungeon_master_api_facade.js';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {playerCharacterSheetsCompendiumVisible: false, creatureCompendiumVisible: false, spellCompendiumVisible: false, storedStatBlocks: [], storedSpells: [], storedItems: [], storedObjects: {stat_blocks: [], spells: []}}
    this._toggleCreatureCompendium = this._toggleCreatureCompendium.bind(this);
    this.toggleItemCompendium = this.toggleItemCompendium.bind(this);
    this.toggleSpellCompendium = this.toggleSpellCompendium.bind(this);
    this.toggleWorkBookCompendium = this.toggleWorkBookCompendium.bind(this);
    this.togglePlayerCharacterSheetsCompendium = this.togglePlayerCharacterSheetsCompendium.bind(this);
    this.addObjectToStorage = this.addObjectToStorage.bind(this);
  }

  componentDidMount(){
    get('stat_blocks').then((result => {
     this.setState({monster_items: result});
    }));
    get('spells').then((result => {
     this.setState({spell_items: result});
    }));
    get('items').then((result => {
     this.setState({items_items: result});
    }));
    get('workbooks').then((result => {
     this.setState({workbook_items: result});
    }));
  }

  _toggleCreatureCompendium(){
    this.setState({spellCompendiumVisible: false});
    this.setState({itemCompendiumVisible: false});
    this.setState({playerCharacterSheetsCompendiumVisible: false});
    this.setState({workBookCompendiumVisible: false});
    this.setState({creatureCompendiumVisible: !(this.state.creatureCompendiumVisible)});
  }

  toggleItemCompendium(){
    this.setState({creatureCompendiumVisible: false});
    this.setState({spellCompendiumVisible: false});
    this.setState({playerCharacterSheetsCompendiumVisible: false});
    this.setState({workBookCompendiumVisible: false});
    this.setState({itemCompendiumVisible: !(this.state.itemCompendiumVisible)});
  }

  toggleSpellCompendium(){
    this.setState({creatureCompendiumVisible: false});
    this.setState({itemCompendiumVisible: false});
    this.setState({playerCharacterSheetsCompendiumVisible: false});
    this.setState({workBookCompendiumVisible: false});
    this.setState({spellCompendiumVisible: !(this.state.spellCompendiumVisible)});
  }

  toggleWorkBookCompendium(){
    this.setState({creatureCompendiumVisible: false});
    this.setState({itemCompendiumVisible: false});
    this.setState({playerCharacterSheetsCompendiumVisible: false});
    this.setState({spellCompendiumVisible: false});
    this.setState({workBookCompendiumVisible: !(this.state.workBookCompendiumVisible)});
  }

  togglePlayerCharacterSheetsCompendium(){
    this.setState({spellCompendiumVisible: false});
    this.setState({itemCompendiumVisible: false});
    this.setState({creatureCompendiumVisible: false});
    this.setState({playerCharacterSheetsCompendiumVisible: !(this.state.playerCharacterSheetsCompendium)});
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
      case 'items':
        var total_items = this.state.storedItems.concat(objects);
        total_items = [...new Set([...this.state.storedItems,...objects])]
        this.setState({storedItems: total_items});
        break;
    }
  }

  creatureCompendiumView(){
    return (this.state.creatureCompendiumVisible ? <ObjectCompendium loaded_items={this.state.monster_items} object_type={'stat_blocks'} objForm={'StatBlockForm'} obj_component={'StatBlockComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells} drawerInfoItems={this.state.storedItems}/> : null);
  }

  spellCompendiumView(){
    return (this.state.spellCompendiumVisible ? <ObjectCompendium loaded_items={this.state.spell_items} object_type={'spells'} objForm={'SpellForm'} obj_component={'SpellBlockComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells} drawerInfoItems={this.state.storedItems}/> : null);
  }

  itemCompendiumView(){
    return (this.state.itemCompendiumVisible ? <ObjectCompendium loaded_items={this.state.items_items} object_type={'items'} objForm={'ItemForm'} obj_component={'ItemBlockComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells} drawerInfoItems={this.state.storedItems}/> : null);
  }

  workBookCompendiumView(){
    return (this.state.workBookCompendiumVisible ? <ObjectCompendium loaded_items={this.state.workbook_items} object_type={'work_books'} objForm={'ItemForm'} obj_component={'WorkBookComponent'} storeObjects={this.addObjectToStorage} drawerInfoCreatures={this.state.storedStatBlocks} drawerInfoSpells={this.state.storedSpells} drawerInfoItems={this.state.storedItems}/> : null);
  }

  characterSheetsCompendiumView(){
    return (this.state.playerCharacterSheetsCompendiumVisible ? <CharacterSheetComponent/> : null);
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
            <ReactBootStrap.Nav.Link onClick={this.toggleItemCompendium}> Item Compendium </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this.toggleWorkBookCompendium}> Work Book Compendium </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this.togglePlayerCharacterSheetsCompendium}> Character Sheet Compendium </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        <div>
          {this.creatureCompendiumView()}
          {this.spellCompendiumView()}
          {this.itemCompendiumView()}
          {this.workBookCompendiumView()}
          {this.characterSheetsCompendiumView()}
        </div>
      </div>
    );
  }
}

export default App;
