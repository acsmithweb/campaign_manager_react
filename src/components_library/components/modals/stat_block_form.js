import React from 'react'
import * as ReactBootStrap from "react-bootstrap"


class StatBlockForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  render() {
    return (
      <ReactBootStrap.Form>
            <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Label>Creature Name</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control size='lg' type='text' id='name' defaultValue={this.state.name} onChange={this.props.setFieldValue}/>
              <br />
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Creature Type</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='text' id='creature_type'  defaultValue={this.state.creature_type} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Alignment</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='text' id='alignment'  defaultValue={this.state.alignment} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>AC</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='armor_class'  defaultValue={this.state.armor_class} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>HP</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='hit_points'  defaultValue={this.state.hit_points} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                <ReactBootStrap.Form.Label>CR</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='sm' type='number' id='challenge_rating'  defaultValue={this.state.challenge_rating} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                <ReactBootStrap.Form.Label>XP</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='sm' type='number' id='experience_points' defaultValue={this.state.experience_points} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-4'>
                  <ReactBootStrap.Form.Label>Speed</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='text' id='speed' defaultValue={this.state.speed} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Strength</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='str' defaultValue={this.state.str} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Dexterity</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='dex' defaultValue={this.state.dex} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Constitution</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='con' defaultValue={this.state.con} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Intelligence</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='int' defaultValue={this.state.int} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Wisdom</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='wis' defaultValue={this.state.wis} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-2'>
                  <ReactBootStrap.Form.Label>Charisma</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' type='number' id='cha' defaultValue={this.state.cha} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Skills</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='skills' defaultValue={this.state.skills} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Saving Throws</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='saving_throws' defaultValue={this.state.saving_throws} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Senses</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='senses' defaultValue={this.state.senses} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Abilities</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='abilities' defaultValue={this.state.abilities} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Damage Vulnerabilities</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='vulnerability' defaultValue={this.state.vulnerability} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Damage Immunities</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='damage_immunities' defaultValue={this.state.damage_immunities} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <br />
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Damage Resistances</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='damage_resistance' defaultValue={this.state.damage_resistance} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Condition Immunities</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='condition_immunities' defaultValue={this.state.condition_immunities} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Languages</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='languages'  defaultValue={this.state.languages} onChange={this.props.setFieldValue}/>
                </div>
                <div class='col-md-6'>
                  <ReactBootStrap.Form.Label>Legendary Actions</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='legendary_actions'  defaultValue={this.state.legendary_actions} onChange={this.props.setFieldValue}/>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12'>
                  <ReactBootStrap.Form.Label>Actions</ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='actions'  defaultValue={this.state.actions} onChange={this.props.setFieldValue}/>
                </div>
              </div>
            </ReactBootStrap.Form.Group>
            </ReactBootStrap.Form>
      );
  }
}

export default StatBlockForm;
