import React from 'react';
import StatBlockLibrary from './stat_block_library'
import CreatureForm from './creature_form'
import * as ReactBootStrap from "react-bootstrap"
import "../styling/creature_compendium.css"


class CreatureCompendium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};

    this._toggleAddCreatureModal = this._toggleAddCreatureModal.bind(this);
  }

  _toggleAddCreatureModal(){
    this.setState({show: !this.state.show});
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
          <CreatureForm _toggleAddCreatureModal = {this._toggleAddCreatureModal} show = {this.state.show}/>
          <StatBlockLibrary />
        </div>
      </div>
    );
  }
}
export default CreatureCompendium;
