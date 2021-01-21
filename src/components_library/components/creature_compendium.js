import React from 'react';
import StatBlockLibrary from './stat_block_library';
import CreatureForm from './creature_form';
import ActionConfirmationModal from './action_confirmation_modal';
import EditStatBlockModal from './edit_stat_block_modal';
import CompendiumActionBar from './compendium_action_bar';
import * as ReactBootStrap from "react-bootstrap";
import "../styling/creature_compendium.css";
import {delete_stat_blocks, retrieve_stat_blocks_with_filter} from '../../js/stat_block_api_facade.js';

class CreatureCompendium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 1, show_add_creature: false, show_delete_confirmation: false, selected_items: [], edit_items: [], search_value: [], search_results:null};

    this._toggleAddCreatureModal = this._toggleAddCreatureModal.bind(this);
    this.toggleEditCreatureModal = this.toggleEditCreatureModal.bind(this);
    this.toggleActionConfirmationModal = this.toggleActionConfirmationModal.bind(this);
    this.retrieveSelectedStatBlocks = this.retrieveSelectedStatBlocks.bind(this);
    this.searchStatBlockText = this. searchStatBlockText.bind(this);
    this.addIdToSelectList = this.addIdToSelectList.bind(this);
    this.removeIdFromSelectList = this.removeIdFromSelectList.bind(this);
    this.deleteStatBlocks = this.deleteStatBlocks.bind(this);
    this.refreshCompendium = this.refreshCompendium.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  _toggleAddCreatureModal(){
    this.setState({show_add_creature: !this.state.show_add_creature});
    if (this.state.show_add_creature == true) {
      this.refreshCompendium('')
    }
  }

  toggleActionConfirmationModal(){
    this.setState({show_delete_confirmation: !this.state.show_delete_confirmation});
  }

  toggleEditCreatureModal(){
    this.setState({show_edit_creature: !this.state.show_edit_creature});
    if (this.state.show_edit_creature == true) {
      this.refreshCompendium('')
    }
    this.retrieveSelectedStatBlocks();
  }

  retrieveSelectedStatBlocks(){
    retrieve_stat_blocks_with_filter('id',this.state.selected_items)
    .then(
      (result) => {
        this.setState({edit_items: result});
      }
    );
  }

  searchStatBlockText(event){
    event.preventDefault();
    retrieve_stat_blocks_with_filter('text',[this.state.search_value])
    .then(
      (result) => {
        this.setState({search_results: result});
      }
    );
    this.refreshCompendium(this.state.search_value);
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
    this.refreshCompendium('');
  }

  updateSearchValue(event){
    this.setState({search_value: event.target.value})
  }

  refreshCompendium(search_value){
    this.setState({search_value: search_value, search_results: [], selected_items:[], edit_items:[], key: Math.random()});
  }

  render(){
    return (
      <div>
        <CompendiumActionBar
          createAction = {this._toggleAddCreatureModal}
          editAction = {this.toggleEditCreatureModal}
          deleteAction = {this.toggleActionConfirmationModal}
          searchAction = {this.searchStatBlockText}
          search_value = {this.state.search_value}
          updateSearchValue = {this.updateSearchValue}
          object = {'Creature'}
        />
        <div className='compendium-body'>
          <CreatureForm
            _toggleAddCreatureModal = {this._toggleAddCreatureModal}
            show = {this.state.show_add_creature}
          />
          <EditStatBlockModal
            toggleModal = {this.toggleEditCreatureModal}
            show = {this.state.show_edit_creature}
            selected_items = {this.state.edit_items}
          />
          <ActionConfirmationModal
            message = {'Are you sure you want to delete these stat blocks?'}
            toggleModal = {this.toggleActionConfirmationModal}
            show = {this.state.show_delete_confirmation}
            execute_action = {this.deleteStatBlocks}
          />
          <StatBlockLibrary
            filteredStatBlocks={this.state.search_results}
            addIdToSelectList={this.addIdToSelectList}
            removeIdFromSelectList = {this.removeIdFromSelectList}
            key={this.state.key}
          />
        </div>
      </div>
    );
  }
}
export default CreatureCompendium;
