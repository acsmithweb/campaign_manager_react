import React from 'react';
import * as Components from "./object_blocks.js";
import "../styling/library.css"
import {get, get_with_filter} from '../../js/dungeon_master_api_facade.js';



class ObjectLibrary extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.filteredObjects != null && this.props.filteredObjects.length > 0) {
      var filtered_objects = this.props.filteredObjects;
    }
    else {
      var filtered_objects = [];
    }

    this.state = {
      error: null,
      items: filtered_objects,
      bookmarks: []
    };

    console.log(this.state);

    this.populateCompendium = this.populateCompendium.bind(this);
  }

    componentDidMount() {
      if (this.props.filteredObjects != null && this.props.filteredObjects.length > 0) {
        this.retrieveSelectedObjects();
      }
      else{
        this.populateCompendium();
      }
    };

    populateCompendium() {
      get(this.props.object_type)
      .then(
        (result) => {
          this.setState({
            items: result,
            error: result.error
          });
        }
      )
    };

    retrieveSelectedObjects(){
      if (this.props.filteredObjects != null && typeof this.props.filteredObjects[0] === 'object'){
        var items = this.props.filteredObjects;
      }
      else {
        get_with_filter(this.props.object_type,'id',this.props.filteredObjects)
        .then(
          (result) => {
            this.setState({bookmarks: result});
          }
        );
      }
    };

  render() {
    const Component = Components[this.props.obj_component]
    var items = this.state.items

    if (this.props.filteredObjects == null || this.props.filteredObjects.length === 0 && this.props.compact == false) {
      items = this.state.items;
    }
    else {
      items = this.state.bookmarks;
    }
    if (items.length > 0){
      return (
        <div class='grid-container'>
          {items.map(item => (
              <Component key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList} compact={this.props.compact}/>
          ))}
        </div>
      );
    }
    else{
      return (
        <div>No Objects Loaded</div>
      )
    }
  }
}

export default ObjectLibrary;
