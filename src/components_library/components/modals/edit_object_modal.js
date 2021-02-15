import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import * as Forms from './object_forms.js'
import {edit_objects} from '../../../js/dungeon_master_api_facade.js'

class EditObjectModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {[this.props.object_type]: []};

      this.setFieldValue = this.setFieldValue.bind(this);
      this.update_selected_items = this.update_selected_items.bind(this);
      this.setCheckBoxValue = this.setCheckBoxValue.bind(this);
  }

  setFieldValue(event, id){
    this.setState({[this.props.object_type]: {...this.state[this.props.object_type], [id]: { ...this.state[this.props.object_type][id],[event.target.id]: event.target.value}}})
  }

  setCheckBoxValue(event, id){
    this.setState({[this.props.object_type]: {...this.state[this.props.object_type], [id]: {...this.state[this.props.object_type][id],[event.target.id]: event.target.checked === 'on'}}});
  };

  update_selected_items(){
    edit_objects(this.props.object_type, this.state);
    this.props.toggleModal();
  }

  close_modal(){
    this.setState({[this.props.object_type]: []});
    this.props.toggleModal();
  }

  render() {
    const Form = Forms[this.props.objForm];
    return (
      <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props.toggleModal}>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Edit {this.props.object_type.substring(0, this.props.object_type.length-1).replace(/_/g, " ")}</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            <ReactBootStrap.Tabs>
            {this.props.selected_items.length ? this.props.selected_items.map((item, index) => (
              <ReactBootStrap.Tab eventKey={item.id} title={item.name}>
                <Form key={item.id} item={item} setFieldValue={(e) => {this.setFieldValue(e, item.id)}} setCheckBoxValue={(e) => {this.setCheckBoxValue(e, item.id)}}/>
              </ReactBootStrap.Tab>
              )) : 'No Stat Block Selected'}

              </ReactBootStrap.Tabs>
          </ReactBootStrap.Modal.Body>

        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.update_selected_items}>Submit</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
    );
  }
}

export default EditObjectModal;
