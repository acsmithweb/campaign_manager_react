import React from 'react';
import StatBlockComponent from './stat_block_component'
import CreatureForm from './creature_form'
import * as ReactBootStrap from "react-bootstrap"
import "../styling/creature_compendium.css"


class CreatureCompendium extends React.Component {
  constructor(props) {
    super();
    this.state = {addCreatureFormVisible: false};
    this._toggleAddCreatureModal = this._toggleAddCreatureModal.bind(this);
  }

  _toggleAddCreatureModal(){
    console.log(this.state.addCreatureFormVisible);
    this.setState({addCreatureFormVisible: !(this.state.addCreatureFormVisible)});
  }

  addCreatureFormView(){
    return (this.state.addCreatureFormVisible ? <CreatureForm _toggleAddCreatureModal={this._toggleAddCreatureModal}/> : null);
  }

  render(){
    return (
      <div>
        <div className='compendium-side-bar'>
          <ReactBootStrap.Button variant="success" onClick={this._toggleAddCreatureModal}> Add Creature </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="danger"> Remove Creature </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="warning"> Edit Creature </ReactBootStrap.Button>
        </div>
        <div className='compendium-body'>
          {this.addCreatureFormView()}
          <StatBlockComponent />
        </div>
      </div>
    );
  }
}
export default CreatureCompendium;
