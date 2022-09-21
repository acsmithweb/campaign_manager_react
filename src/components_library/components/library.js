import React from 'react';
import * as Components from "./object_blocks.js";
import "../styling/library.css"
import InfiniteScroll from "react-infinite-scroller";
import {get, get_with_filter} from '../../js/dungeon_master_api_facade.js';



class ObjectLibrary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hasMore: true,
      error: null
    };
  }

  componentDidMount(){
    this.populateLibrary();
  }

  async populateLibrary(){
    var items = [];
    if (this.props.compact == false && this.props.filteredObjects != null && this.props.filteredObjects.length > 0){
      items = this.props.filteredObjects;
      this.setState({items: items, display_items: items.slice(0,6)});
    };
    if (this.props.compact == true && this.props.bookmarks != null && this.props.bookmarks.length > 0){
      const response = await get_with_filter(this.props.object_type,'id',this.props.bookmarks);
      console.log(response);
      this.setState({items: response, display_items: response.slice(0,6)});
    };
  }

  fetchMoreData = () => {
    setTimeout(() =>{
      var display_list_end = this.state.display_items.length;
      this.setState({
        display_items: this.state.display_items.concat(this.state.items.slice(display_list_end, display_list_end + 10))
      });
    });
  }

  render() {
    const Component = Components[this.props.obj_component]
    var items = this.state.display_items;
    if (items != null && (items.length > 0 && items.length <= this.state.items.length)){
      return (
        <InfiniteScroll dataLength={this.state.items.length}
          loadMore={this.fetchMoreData}
          hasMore={true}
        >
          {items.map(item => (
              <Component key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList} compact={this.props.compact} />
          ))}
        </InfiniteScroll>
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
