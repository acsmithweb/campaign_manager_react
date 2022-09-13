import React from 'react';
import * as Components from "./object_blocks.js";
import "../styling/library.css"
import {get, get_with_filter} from '../../js/dungeon_master_api_facade.js';



class ObjectLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      error: null
    };
  }

  componentDidMount(){
    if(this.props.compact == false && this.props.filteredObjects.length == 0 && this.props.filteredObjects.length == 0){
      get(this.props.object_type).then((result => {
         this.setState({items: result});
      }
    ))};
    if (this.props.filteredObjects != null && this.props.filteredObjects.length > 0){
      this.setState({items: this.props.filteredObjects});
    };
    if (this.props.bookmarks != null && this.props.bookmarks.length > 0) {
      get_with_filter(this.props.object_type,'id',this.props.bookmarks)
      .then(
        (result) => {
          this.setState({items: result})
        }
      )
    };
  }
  render() {
    const Component = Components[this.props.obj_component]
    var items = this.state.items;
    if (items != null && items.length > 0){
      return (
        <div class='row'>
          {items.map(item => (
              <Component key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList} compact={this.props.compact} />
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
