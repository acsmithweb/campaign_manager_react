import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {edit_stat_block} from '../../js/stat_block_api_facade.js'

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
                  <ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Label>Creature Name</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='lg' type='text' id='name' key={item.id} defaultValue={item.name} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                    <br />
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Creature Type</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='text' id='creature_type' key={item.id} defaultValue={item.creature_type} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Alignment</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='text' id='alignment' key={item.id} defaultValue={item.alignment} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>AC</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='armor_class' key={item.id} defaultValue={item.armor_class} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>HP</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='hit_points' key={item.id} defaultValue={item.hit_points} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                      <ReactBootStrap.Form.Label>CR</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control size='sm' type='number' id='challenge_rating' key={item.id} defaultValue={item.challenge_rating} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                      <ReactBootStrap.Form.Label>XP</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control size='sm' type='number' id='experience_points' key={item.id} defaultValue={item.experience_points} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-4'>
                        <ReactBootStrap.Form.Label>Speed</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='text' id='speed' key={item.id} defaultValue={item.speed} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Strength</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='str' key={item.id} defaultValue={item.str} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Dexterity</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='dex' key={item.id} defaultValue={item.dex} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Constitution</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='con' key={item.id} defaultValue={item.con} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Intelligence</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='int' key={item.id} defaultValue={item.int} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Wisdom</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='wis' key={item.id} defaultValue={item.wis} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-2'>
                        <ReactBootStrap.Form.Label>Charisma</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' type='number' id='cha' key={item.id} defaultValue={item.cha} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Skills</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='skills' defaultValue={item.skills} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Saving Throws</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='saving_throws' defaultValue={item.saving_throws} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Senses</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='senses' defaultValue={item.senses} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Abilities</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='abilities' defaultValue={item.abilities} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Damage Vulnerabilities</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='vulnerability' defaultValue={item.vulnerability} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Damage Immunities</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='damage_immunities' defaultValue={item.damage_immunity} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <br />
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Damage Resistances</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='damage_resistance' defaultValue={item.damage_resistance} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Condition Immunities</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='condition_immunities' defaultValue={item.condition_immunities} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Languages</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='languages'  defaultValue={item.languages} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                      <div class='col-md-6'>
                        <ReactBootStrap.Form.Label>Legendary Actions</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='legendary_actions'  defaultValue={item.legendary_actions} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-12'>
                        <ReactBootStrap.Form.Label>Actions</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' key={item.id} id='actions'  defaultValue={item.actions} onChange={(e) => {this.setFieldValue(e, item.id)}}/>
                      </div>
                    </div>
                  </ReactBootStrap.Form.Group>
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
