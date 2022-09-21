import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "../styling/workspace_drawer.css"
import ObjectLibrary from './library.js';

class WorkspaceDrawer extends React.Component {
  render(){
    return (
    <div id='sidebar'>
    <ReactBootStrap.Accordion class='col-xl-2 col-sm-4' >
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
    </div>
    )
  }
}

export default WorkspaceDrawer;
