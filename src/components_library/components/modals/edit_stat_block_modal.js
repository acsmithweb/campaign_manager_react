import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import StatBlockForm from './stat_block_form.js'
import {edit_stat_block} from '../../../js/stat_block_api_facade.js'

class EditStatBlockModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {stat_blocks: []};

      this.setFieldValue = this.setFieldValue.bind(this);
      this.update_selected_items = this.update_selected_items.bind(this);
  }

  setFieldValue(event, stat_id){
    this.setState({stat_blocks: {...this.state.stat_blocks, [stat_id]: { ...this.state.stat_blocks[stat_id],[event.target.id]: event.target.value}}})
  }

  update_selected_items(){
    edit_stat_block(this.state);
    this.props.toggleModal();
  }

  close_modal(){
    this.setState({stat_blocks: []});
    this.props.toggleModal();
  }

  render() {
    return (
      <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props.toggleModal}>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Edit Creature</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Form>
          <ReactBootStrap.Modal.Body>
            <ReactBootStrap.Tabs>
            {this.props.selected_items.length ? this.props.selected_items.map((item, index) => (
              <ReactBootStrap.Tab eventKey={item.id} title={item.name}>
                <StatBlockForm item={item} setFieldValue={(e) => {this.setFieldValue(e, item.id)}}/>
              </ReactBootStrap.Tab>
              )) : 'No Stat Block Selected'}

              </ReactBootStrap.Tabs>
          </ReactBootStrap.Modal.Body>

        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.update_selected_items}>Submit</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
        </ReactBootStrap.Form>
      </ReactBootStrap.Modal>
    );
  }
}

export default EditStatBlockModal;
