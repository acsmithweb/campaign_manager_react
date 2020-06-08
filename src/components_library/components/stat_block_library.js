import React from 'react'
import StatBlockComponent from "./stat_block_component.js"

class StatBlockLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      selected_items: []
    };

    this.populateCompendium = this.populateCompendium.bind(this);
    this.addIdToSelectList = this.addIdToSelectList.bind(this);
    this.removeIdFromSelectList = this.removeIdFromSelectList.bind(this);
  }

  componentDidMount() {
    this.populateCompendium();
    this.compendiumUpdate = setInterval(this.populateCompendium, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.compendiumUpdate);
  }

  addIdToSelectList(id) {
    this.state.selected_items.push(id);
  }

  removeIdFromSelectList(id) {
    this.setState({selected_items: this.state.selected_items.filter(identifier => identifier !== id)});
  }

  populateCompendium() {
    console.log(this.state.selected_items);
    fetch("http://localhost:3000/stat_blocks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        (error) => {
          this.setState({
            error
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
            <StatBlockComponent item={item} removeIdFromSelectList={this.removeIdFromSelectList} addIdToSelectList={this.addIdToSelectList}/>
          ))}
        </ul>
      );
  }
}

}

export default StatBlockLibrary
