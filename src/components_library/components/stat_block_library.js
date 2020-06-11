import React from 'react'
import StatBlockComponent from "./stat_block_component.js"

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
    this.compendiumUpdate = setInterval(this.populateCompendium, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.compendiumUpdate);
  }

  populateCompendium() {
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
            <StatBlockComponent key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList}/>
          ))}
        </ul>
      );
  }
}

}

export default StatBlockLibrary
