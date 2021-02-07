import React from 'react';
import ActionConfirmationModal from './../modals/action_confirmation_modal';
import CompendiumActionBar from './../compendium_action_bar';
import SpellBlockLibrary from './../spell_library';
import SpellForm from './../modals/spell_form'
import * as ReactBootStrap from "react-bootstrap";
import "../../styling/compendium.css";
import {delete_spells, retrieve_spells_with_filter} from '../../../js/spell_api_facade.js';

class SpellCompendium extends React.Component {
  constructor(props){
    super(props);

    this.state = {key: 1, show_add_spell: false, show_delete_confirmation: false, selected_items: [], edit_spells: [], search_value: [], search_results:null};

    this.toggleAddSpellModal = this.toggleAddSpellModal.bind(this);
    this.toggleEditSpellModal = this.toggleEditSpellModal.bind(this);
    this.toggleActionConfirmationModal = this.toggleActionConfirmationModal.bind(this);
    this.addIdToSelectList = this.addIdToSelectList.bind(this);
    this.removeIdFromSelectList = this.removeIdFromSelectList.bind(this);
    this.searchSpellText = this.searchSpellText.bind(this);
    this.deleteSpells = this.deleteSpells.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  toggleAddSpellModal(){
    this.setState({show_add_spell: !this.state.show_add_spell});
    if (this.state.show_add_spell == true){
      this.refreshCompendium('')
    }
  }

  toggleEditSpellModal(){

  }

  toggleActionConfirmationModal(){
    this.setState({show_delete_confirmation: !this.state.show_delete_confirmation});
  }

  deleteSpells(){
    console.log(this.state.selected_items);
    delete_spells(this.state.selected_items);
    this.setState({selected_items: []});
    this.toggleActionConfirmationModal();
    this.refreshCompendium('');
  }

  searchSpellText(){}
  updateSearchValue(){}

  refreshCompendium(search_value){
    this.setState({search_value: search_value, search_results: [], selected_items:[], edit_items:[], key: Math.random()});
  }

  setSelectedSpells(spell_ids){
    this.setState({selected_items: spell_ids});
  }

  addIdToSelectList(id) {
    this.setSelectedSpells(this.state.selected_items.concat(id));
  }

  removeIdFromSelectList(id) {
    var new_selected_items = this.state.selected_items.filter(identifier => identifier !== id);
    this.setSelectedSpells(new_selected_items);
  }

  render(){
    return (
      <div>
        <CompendiumActionBar
          createAction = {this.toggleAddSpellModal}
          editAction = {this.toggleEditSpellModal}
          deleteAction = {this.toggleActionConfirmationModal}
          searchAction = {this.searchSpellText}
          search_value = {this.state.search_value}
          updateSearchValue = {this.updateSearchValue}
          object = {'Spell'}
      />
        <div className='compendium-body'>
          <SpellBlockLibrary
            addIdToSelectList={this.addIdToSelectList}
            removeIdFromSelectList={this.removeIdFromSelectList}
            key = {this.state.key}/>
          <SpellForm
            toggleAddSpellModal = {this.toggleAddSpellModal}
            show = {this.state.show_add_spell}
          />
          <ActionConfirmationModal
            message = {'Are you sure you want to delete these spells?'}
            toggleModal = {this.toggleActionConfirmationModal}
            show = {this.state.show_delete_confirmation}
            execute_action = {this.deleteSpells}
          />
        </div>
      </div>
    )
  }
}

export default SpellCompendium;
