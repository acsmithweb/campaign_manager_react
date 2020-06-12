import React from 'react';
import StatBlockLibrary from './stat_block_library';
import CreatureForm from './creature_form';
import ActionConfirmationModal from './action_confirmation_modal';
import * as ReactBootStrap from "react-bootstrap";
import "../styling/creature_compendium.css";
import {delete_stat_blocks} from '../../js/stat_block_api_facade.js';

class CreatureCompendium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show_add_creature: false, show_delete_confirmation: false, selected_items: []};

    this._toggleAddCreatureModal = this._toggleAddCreatureModal.bind(this);
    this.toggleActionConfirmationModal = this.toggleActionConfirmationModal.bind(this);
    this.addIdToSelectList = this.addIdToSelectList.bind(this);
    this.removeIdFromSelectList = this.removeIdFromSelectList.bind(this);
    this.deleteStatBlocks = this.deleteStatBlocks.bind(this);
  }

  _toggleAddCreatureModal(){
    this.setState({show_add_creature: !this.state.show_add_creature});
  }

  toggleActionConfirmationModal(){
    this.setState({show_delete_confirmation: !this.state.show_delete_confirmation});
  }

  setSelectedStatBlocks(stat_block_ids){
    this.setState({selected_items: stat_block_ids});
  }

  addIdToSelectList(id) {
    this.setSelectedStatBlocks(this.state.selected_items.concat(id));
  }

  removeIdFromSelectList(id) {
    var new_selected_items = this.state.selected_items.filter(identifier => identifier !== id);
    this.setSelectedStatBlocks(new_selected_items);
  }

  deleteStatBlocks(){
    delete_stat_blocks(this.state.selected_items);
    this.setState({selected_items: []});
    this.toggleActionConfirmationModal();
  }

  render(){
    return (
      <div>
        <div className='compendium-side-bar'>
          <ReactBootStrap.Button variant="success" onClick={this._toggleAddCreatureModal}> Add Creature </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="danger" onClick={this.toggleActionConfirmationModal}> Remove Creature </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="warning"> Edit Creature </ReactBootStrap.Button>
        </div>
        <div className='compendium-body'>
          <CreatureForm _toggleAddCreatureModal = {this._toggleAddCreatureModal} show = {this.state.show_add_creature}/>
          <ActionConfirmationModal message = {'Are you sure you want to delete these stat blocks?'} toggleModal = {this.toggleActionConfirmationModal} show = {this.state.show_delete_confirmation} execute_action = {this.deleteStatBlocks}/>
          <StatBlockLibrary addIdToSelectList={this.addIdToSelectList} removeIdFromSelectList = {this.removeIdFromSelectList}/>
        </div>
      </div>
    );
  }
}
export default CreatureCompendium;
