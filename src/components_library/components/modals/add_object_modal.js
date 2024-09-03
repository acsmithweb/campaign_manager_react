import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import * as Forms from './object_forms.js'
import {add_object} from '../../../js/dungeon_master_api_facade.js'

class AddObjectModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: ''};

      this.setFieldValue = this.setFieldValue.bind(this);
      this.addObjectToCompendium = this.addObjectToCompendium.bind(this);
      this.setCheckBoxValue = this.setCheckBoxValue.bind(this);
  };

  setFieldValue(event){
    this.setState({ [event.target.id]:  event.target.value });
  };

  setCheckBoxValue(event){
    this.setState({[event.target.id]: event.target.checked});
  };

  addObjectToCompendium(event) {
    add_object(this.state, this.props.object_type);
    this.props.toggleModal();
  };

  render() {
    const Form = Forms[this.props.objForm];

    return (
      <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props.toggleModal}>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Add {this.props.object_type.substring(0, this.props.object_type.length-1).replace(/_/g, " ")}</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
          <Form item={this.state} setFieldValue={this.setFieldValue} setCheckBoxValue={this.setCheckBoxValue}/>
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.addObjectToCompendium}>Add {this.props.object_type.substring(0, this.props.object_type.length-1).replace(/_/g, " ")}</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
    );
  }
}

export default AddObjectModal;
