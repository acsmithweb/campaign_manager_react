import React from 'react'
import StatBlockComponent from "./stat_block_component.js"
import {get_stat_blocks} from '../../js/stat_block_api_facade.js'

class StatBlockLibrary extends React.Component {
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
    get_stat_blocks()
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
  const { error, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
        <ul>
          {items.map(item => (
            <StatBlockComponent key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList}/>
          ))}
        </ul>
      );
  }
}

}

export default StatBlockLibrary
