import React from 'react'
import * as Components from "./object_blocks.js"
import {get} from '../../js/dungeon_master_api_facade.js'

class ObjectLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
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

  render() {
    const Component = Components[this.props.obj_component]

    var items = []
    if (this.props.filteredObjects === null || this.props.filteredObjects.length === 0) {
      items = this.state.items
    }
    else {
      items = this.props.filteredObjects
    }
    return (
      <ul>
        {items.map(item => (
          <Component key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList}/>
        ))}
      </ul>
    );
  }
}

export default ObjectLibrary;
