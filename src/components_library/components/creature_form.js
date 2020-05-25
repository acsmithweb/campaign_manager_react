import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

class CreatureForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: ''};

      this._setFieldValue = this._setFieldValue.bind(this);
      this._closeAddCreatureModal = this._closeAddCreatureModal.bind(this);
      this._addCreatureToCompendium = this._addCreatureToCompendium.bind(this);
      this._submitCreatureToCompendium = this._submitCreatureToCompendium.bind(this);
  };

  _setFieldValue(event){
    this.setState({ [event.target.id]:  event.target.value });
    console.log(this.state);
  }

  _closeAddCreatureModal() {
    this.props._toggleAddCreatureModal();
  };

  _addCreatureToCompendium(event) {
    event.preventDefault();
    this._closeAddCreatureModal();
  };

  _submitCreatureToCompendium(event) {
    console.log(this.state);
    fetch('http://localhost:3000/stat_blocks',
    {
      method: 'POST',
      headers:
      {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.state)})
    .then(res => res.json())
    .then(res => console.log(res));
    this._closeAddCreatureModal();
  }

  render() {
    return (
      <ReactBootStrap.Modal.Dialog size='lg'>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Add Creature</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>

        <ReactBootStrap.Form>
          <ReactBootStrap.Modal.Body>
              <ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Label>Creature Name</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='lg' type='text' id='name' value={this.state.name} onChange={this._setFieldValue}/>
                <br />
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Creature Type</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='text' id='creature_type'  value={this.state.creature_type} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Alignment</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='text' id='alignment'  value={this.state.alignemnt} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>AC</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='armor_class'  value={this.state.armor_class} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>HP</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='hit_points'  value={this.state.hit_points} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>CR</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='challenge_rating'  value={this.state.challenge_rating} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>XP</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='experience_points' value={this.state.experience_points} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-4'>
                    <ReactBootStrap.Form.Label>Speed</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='text' id='speed' value={this.state.speed} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Strength</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='str' value={this.state.str} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Dexterity</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='dex' value={this.state.dex} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Constitution</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='con' value={this.state.con} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Intelligence</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='int' value={this.state.int} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Wisdom</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='wis' value={this.state.wis} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-2'>
                    <ReactBootStrap.Form.Label>Charisma</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' type='number' id='cha' value={this.state.cha} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Skills</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='skills' value={this.state.skills} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Saving Throws</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='saving_throws' value={this.state.saving_throws} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Senses</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='senses' value={this.state.senses} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Abilities</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='abilities' value={this.state.abilities} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Damage Vulnerabilities</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='vulnerability' value={this.state.vulnerability} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Damage Immunities</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='damage_immunities' value={this.state.damage_immunity} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <br />
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Damage Resistances</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='damage_resistance' value={this.state.damage_resistance} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Condition Immunities</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='condition_immunities' value={this.state.condition_immunities} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Languages</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='languages'  value={this.state.languages} onChange={this._setFieldValue}/>
                  </div>
                  <div class='col-md-6'>
                    <ReactBootStrap.Form.Label>Legendary Actions</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='legendary_actions'  value={this.state.legendary_actions} onChange={this._setFieldValue}/>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-12'>
                    <ReactBootStrap.Form.Label>Actions</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='actions'  value={this.state.actions} onChange={this._setFieldValue}/>
                  </div>
                </div>
              </ReactBootStrap.Form.Group>
          </ReactBootStrap.Modal.Body>

        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this._closeAddCreatureModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this._submitCreatureToCompendium}>Add Creature</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
        </ReactBootStrap.Form>
      </ReactBootStrap.Modal.Dialog>
    );

  }
}

export default CreatureForm;
