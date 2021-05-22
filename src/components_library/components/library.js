import React from 'react';
import * as Components from "./object_blocks.js";
import "../styling/library.css"
import {get, get_with_filter} from '../../js/dungeon_master_api_facade.js';



class ObjectLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      bookmarks: []
    };

    this.populateCompendium = this.populateCompendium.bind(this);
  }

    componentDidMount() {
      this.populateCompendium();
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
      if (this.props.filteredObjects.length > 0) {
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
      this.retrieveSelectedObjects()
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
