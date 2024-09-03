import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "../styling/workspace_drawer.css"
import ObjectLibrary from './library.js';
import AiChatWindow from './ai_chat_window.js'
import {add_object} from '../../js/dungeon_master_api_facade.js'
import $ from 'jquery';

class WorkspaceDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      isOpen: false,
      bookmarkedSpells: this.props.bookmarkedSpells,
      bookmarkedCreatures: this.props.bookmarkedCreatures,
      bookmarkedItems: this.props.bookmarkedItems
    };

    this.createWorkbook = this.createWorkbook.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  };

  toggleDrawer(){
    this.setState({isOpen: !(this.state.isOpen)});
  }

  createWorkbook(event) {
    var props = this.state;
    var name = $('#new-workbook-name').value;
    add_object({props}, 'workbooks');
  };

  render(){
    return (
    <>

    <div id='sidebar' className={`workspace-drawer ${this.state.isOpen ? 'open' : ''}`}>
    <button className={`toggle-button ${this.state.isOpen ? 'open' : ''}`} onClick={this.toggleDrawer}>{this.state.isOpen ? '←' : '→'}</button>
    <div class='row workbook-action'>
      <div class='workbook-name col-xl-6'>
        <ReactBootStrap.Form.Control size='md' type='text' id='new-workbook-name'/>
      </div>
      <ReactBootStrap.Button id="action-sub-nav-success" class='row workbook-submit col-xl-4' onClick={this.createWorkbook}> Save As Workbook </ReactBootStrap.Button>
    </div>
    <br/>
    <ReactBootStrap.Accordion class='row col-xl-2 col-sm-4' >
      <ReactBootStrap.Card>
        <ReactBootStrap.Accordion.Toggle variant={ReactBootStrap.Card.Header} eventKey="0">
          Spells
        </ReactBootStrap.Accordion.Toggle>
        <ReactBootStrap.Accordion.Collapse eventKey="0">
          <ReactBootStrap.Card.Body class='compact'>
          <ObjectLibrary
            filteredObjects={null}
            bookmarks={this.props.bookmarkedSpells}
            compact = {true}
            obj_component={'SpellBlockComponent'}
            object_type={'spells'}
            key = {this.props.key}
          />
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Accordion.Collapse>
      </ReactBootStrap.Card>
    </ReactBootStrap.Accordion>
    <ReactBootStrap.Accordion class='col-xl-2 col-sm-4'>
      <ReactBootStrap.Card>
        <ReactBootStrap.Accordion.Toggle variant={ReactBootStrap.Card.Header} eventKey="0">
          Creatures
        </ReactBootStrap.Accordion.Toggle>
        <ReactBootStrap.Accordion.Collapse eventKey="0">
          <ReactBootStrap.Card.Body  class='compact'>
            <ObjectLibrary
              filteredObjects={null}
              bookmarks={this.props.bookmarkedCreatures}
              compact = {true}
              obj_component={'StatBlockComponent'}
              object_type={'stat_blocks'}
              key = {this.props.key}
            />
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Accordion.Collapse>
      </ReactBootStrap.Card>
    </ReactBootStrap.Accordion>
    <ReactBootStrap.Accordion class='col-xl-2 col-sm-4'>
      <ReactBootStrap.Card>
        <ReactBootStrap.Accordion.Toggle variant={ReactBootStrap.Card.Header} eventKey="0">
          Items
        </ReactBootStrap.Accordion.Toggle>
        <ReactBootStrap.Accordion.Collapse eventKey="0">
          <ReactBootStrap.Card.Body  class='compact'>
            <ObjectLibrary
              filteredObjects={null}
              bookmarks={this.props.bookmarkedItems}
              compact = {true}
              obj_component={'ItemBlockComponent'}
              object_type={'items'}
              key = {this.props.key}
            />
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Accordion.Collapse>
      </ReactBootStrap.Card>
    </ReactBootStrap.Accordion>
    <AiChatWindow>

    </AiChatWindow>
    </div>
    </>
    )
  }
}

export default WorkspaceDrawer;
