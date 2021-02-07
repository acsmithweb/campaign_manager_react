import React from 'react'
import SpellBlockComponent from "./spell_block_component.js"
import {get_spells} from '../../js/spell_api_facade.js'

class SpellLibrary extends React.Component {
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
      get_spells()
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
    var items = []
    if (this.props.filteredSpells == null || this.props.filteredSpells.length == 0) {
      items = this.state.items
    }
    else {
      items = this.props.filteredSpells
    }
    return (
      <ul>
        {items.map(item => (
          <SpellBlockComponent key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList}/>
        ))}
      </ul>
    );
  }
}

export default SpellLibrary;
