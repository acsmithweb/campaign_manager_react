import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {add_spell} from '../../../js/spell_api_facade.js'

class SpellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', concentration: false, ritual: false};

    this.setFieldValue = this.setFieldValue.bind(this);
    this.setCheckBoxValue = this.setCheckBoxValue.bind(this);
    this.addSpellToCompendium = this.addSpellToCompendium.bind(this);
  };

  setFieldValue(event){
    this.setState({ [event.target.id]:  event.target.value });
  };

  setCheckBoxValue(event){
    this.setState({[event.target.id]: event.target.checked});
  }

  addSpellToCompendium(event){
    add_spell(this.state);
    this.props.toggleAddSpellModal();
  };

  render(){
    return (
      <ReactBootStrap.Modal size='lg' show={this.props.show} onHide={this.props.toggleAddSpellModal}>
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Add Spell</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
          <ReactBootStrap.Form.Group>
            <ReactBootStrap.Form.Label>Spell Name</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='lg' type='text' id='name' defaultValue={this.state.name} onChange={this.setFieldValue}/>
            <br/>
            <div class='row'>
              <div class='col-md-6'>
                <ReactBootStrap.Form.Label>Spell School</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control as="select" id="school" defaultValue={this.state.school} onChange={this.setFieldValue}>
                  <option>Select a School</option>
                  <option>Abjuration</option>
                  <option>Conjuration</option>
                  <option>Divination</option>
                  <option>Enchantment</option>
                  <option>Evocation</option>
                  <option>Illusion</option>
                  <option>Necromancy</option>
                  <option>Transmutation</option>
                </ReactBootStrap.Form.Control>
              </div>
              <div class='col-md-6'>
                <ReactBootStrap.Form.Label>Classes</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='md' type='text' id='classes' defaultValue={this.state.classes} onChange={this.setFieldValue}/>
              </div>
            </div>
            <br />
            <div class='row'>
              <div class='col-md-2'>
                <ReactBootStrap.Form.Label>Spell Level</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='sm' type='number' id='level' max="9" min="0" defaultValue={this.state.level} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-4'>
                <ReactBootStrap.Form.Label>Components</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='md' type='text' id='components' defaultValue={this.state.components} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-6'>
                <ReactBootStrap.Form.Label>Material</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='md' type='text' id='material' defaultValue={this.state.material} onChange={this.setFieldValue}/>
              </div>
            </div>
            <br/>
            <div class='row'>
              <div class='col-md-2'>
              <ReactBootStrap.Form.Label>Duration</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='md' type='text' rows='5' id='duration' defaultValue={this.state.duration} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-2'>
              <ReactBootStrap.Form.Label>Duration</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='md' type='text' rows='5' id='casting_time' defaultValue={this.state.casting_time} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-2'>
              <ReactBootStrap.Form.Label>Range(ft.)</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='xs' type='number' id='range' min="0" defaultValue={this.state.range} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-2'>
              <ReactBootStrap.Form.Label>Concentration
                  <ReactBootStrap.Form.Check id='concentration' onClick={this.setCheckboxValue} defaultChecked={this.state.concentration}/>
              </ReactBootStrap.Form.Label>
              </div>
              <div class='col-md-2'>
              <ReactBootStrap.Form.Label>Ritual
                <ReactBootStrap.Form.Check id='ritual' onClick={this.setCheckboxValue} defaultChecked={this.state.ritual}/>
              </ReactBootStrap.Form.Label>
              </div>
            </div>
            <br/>
            <div class='row'>
              <div class='col-md-6'>
              <ReactBootStrap.Form.Label>Description</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='desc' defaultValue={this.state.desc} onChange={this.setFieldValue}/>
              </div>
              <div class='col-md-6'>
              <ReactBootStrap.Form.Label>At Higher Levels</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='higher_level' defaultValue={this.state.higher_level} onChange={this.setFieldValue}/>
              </div>
            </div>
          </ReactBootStrap.Form.Group>
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleAddSpellModal}> Close</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.addSpellToCompendium}>Add Spell</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>

    )
  }
}

export default SpellForm;
