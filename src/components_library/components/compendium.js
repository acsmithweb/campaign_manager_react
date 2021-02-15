import React from 'react';
import ActionConfirmationModal from './modals/action_confirmation_modal.js';
import AddObjectModal from './modals/add_object_modal.js';
import EditObjectModal from './modals/edit_object_modal.js';
import CompendiumActionBar from './compendium_action_bar.js';
import ObjectLibrary from './library.js';
import "../styling/compendium.css";
import {delete_objects, get_with_filter} from '../../js/dungeon_master_api_facade.js';

class ObjectCompendium extends React.Component {
  constructor(props){
    super(props);

    this.state = {key: 1, show_add_object: false, show_delete_confirmation: false, selected_items: [], edit_items: [], search_value: [], search_results:null, object_type: this.props.object_type};

    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleActionConfirmationModal = this.toggleActionConfirmationModal.bind(this);
    this.addIdToSelectList = this.addIdToSelectList.bind(this);
    this.removeIdFromSelectList = this.removeIdFromSelectList.bind(this);
    this.searchObjectText = this.searchObjectText.bind(this);
    this.deleteObjects = this.deleteObjects.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.retrieveSelectedObjects = this.retrieveSelectedObjects.bind(this);
  }

  toggleAddModal(){
    this.setState({show_add_object: !this.state.show_add_object});
    if (this.state.show_add_object === true){
      this.refreshCompendium('')
    }
  }

  toggleEditModal(){
    this.setState({show_edit_object: !this.state.show_edit_object});
    if (this.state.show_edit_object === true){
      this.refreshCompendium('')
    }
    this.retrieveSelectedObjects();
  }

  toggleActionConfirmationModal(){
    this.setState({show_delete_confirmation: !this.state.show_delete_confirmation});
  }

  deleteObjects(){
    delete_objects(this.state.selected_items, this.state.object_type);
    this.setState({selected_items: []});
    this.toggleActionConfirmationModal();
    this.refreshCompendium('');
  }

  retrieveSelectedObjects(){
    get_with_filter(this.state.object_type,'id',this.state.selected_items)
    .then(
      (result) => {
        this.setState({edit_items: result});
      }
    );
  }

  searchObjectText(event){
    event.preventDefault();
    get_with_filter(this.state.object_type,'text',[this.state.search_value])
    .then(
      (result) => {
        this.setState({search_results: result});
      }
    );
    this.refreshCompendium(this.state.search_value);
  }

  updateSearchValue(event){
    this.setState({search_value: event.target.value})
  }

  refreshCompendium(search_value){
    this.setState({search_value: search_value, search_results:[], selected_items:[], edit_items:[], key: Math.random()});
  }

  setSelectedObjects(object_ids){
    this.setState({selected_items: object_ids});
  }

  addIdToSelectList(id) {
    this.setSelectedObjects(this.state.selected_items.concat(id));
  }

  removeIdFromSelectList(id) {
    var new_selected_items = this.state.selected_items.filter(identifier => identifier !== id);
    this.setSelectedObjects(new_selected_items);
  }

  render(){
    return (
      <div>
        <CompendiumActionBar
          createAction = {this.toggleAddModal}
          editAction = {this.toggleEditModal}
          deleteAction = {this.toggleActionConfirmationModal}
          searchAction = {this.searchObjectText}
          search_value = {this.state.search_value}
          updateSearchValue = {this.updateSearchValue}
          object = {this.state.object_type}
      />
        <div className='compendium-body' key={this.state.key}>
          <AddObjectModal
            toggleModal = {this.toggleAddModal}
            show = {this.state.show_add_object}
            objForm = {this.props.objForm}
            object_type = {this.state.object_type}
          />
          <EditObjectModal
            toggleModal = {this.toggleEditModal}
            show = {this.state.show_edit_object}
            selected_items = {this.state.edit_items}
            objForm = {this.props.objForm}
            object_type = {this.state.object_type}
          />
          <ActionConfirmationModal
            toggleModal = {this.toggleActionConfirmationModal}
            message = {'Are you sure you want to delete these ' + this.state.object_type + '?'}
            show = {this.state.show_delete_confirmation}
            execute_action = {this.deleteObjects}
          />
          <ObjectLibrary
            filteredObjects={this.state.search_results}
            addIdToSelectList={this.addIdToSelectList}
            removeIdFromSelectList={this.removeIdFromSelectList}
            obj_component={this.props.obj_component}
            object_type={this.props.object_type}
            key = {this.state.key}
          />
        </div>
      </div>
    )
  }
}

export default ObjectCompendium;
