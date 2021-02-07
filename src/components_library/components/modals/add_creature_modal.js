import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import StatBlockForm from './stat_block_form.js'
import {add_stat_block} from '../../../js/stat_block_api_facade.js'

class AddCreatureModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: ''};

      this.setFieldValue = this.setFieldValue.bind(this);
      this.addCreatureToCompendium = this.addCreatureToCompendium.bind(this);
  };

  setFieldValue(event){
    this.setState({ [event.target.id]:  event.target.value });
  };

  addCreatureToCompendium(event) {
    add_stat_block(this.state);
    this.props._toggleAddCreatureModal();
  };

  render() {

    return (
      <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props._toggleAddCreatureModal}>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Add Creature</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
          <StatBlockForm item={this.state} setFieldValue={this.setFieldValue}/>
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props._toggleAddCreatureModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.addCreatureToCompendium}>Add Creature</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
    );

  }
}

export default AddCreatureModal;
