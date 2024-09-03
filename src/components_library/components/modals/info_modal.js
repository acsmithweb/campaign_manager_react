import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import * as Components from "../object_blocks.js";

class InfoObjectModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  };

  render() {
    const Component = Components[this.props.obj_component]
    var item = this.props.item;
    if (item == null || Component === undefined){
      return(null);
    } else {
      return (
        <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props.toggleModal}>
          <ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Title></ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            <Component key={item.id} item={item} removeIdFromSelectList={this.props.removeIdFromSelectList} addIdToSelectList={this.props.addIdToSelectList} compact={this.props.compact} />
          </ReactBootStrap.Modal.Body>
          <ReactBootStrap.Modal.Footer>
            <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleModal}> Close</ReactBootStrap.Button>
          </ReactBootStrap.Modal.Footer>
        </ReactBootStrap.Modal>
      );
    }
  }
}

export default InfoObjectModal;
