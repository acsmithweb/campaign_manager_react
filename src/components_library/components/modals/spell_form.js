import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

class SpellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', concentration: false, ritual: false, item: this.props.item};
  };

  render(){
    return (
      <ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Label>Spell Name</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control size='lg' type='text' id='name' defaultValue={this.state.item.name} onChange={this.props.setFieldValue}/>
        <br/>
        <div class='row'>
          <div class='col-md-6'>
            <ReactBootStrap.Form.Label>Spell School</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control as="select" id="school" defaultValue={this.state.item.school} onChange={this.props.setFieldValue}>
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
            <ReactBootStrap.Form.Control size='md' type='text' id='classes' defaultValue={this.state.item.classes} onChange={this.props.setFieldValue}/>
          </div>
        </div>
        <br />
        <div class='row'>
          <div class='col-md-2'>
            <ReactBootStrap.Form.Label>Spell Level</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' type='number' id='level' max="9" min="0" defaultValue={this.state.item.level} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-4'>
            <ReactBootStrap.Form.Label>Components</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' id='components' defaultValue={this.state.item.components} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-6'>
            <ReactBootStrap.Form.Label>Material</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' id='material' defaultValue={this.state.item.material} onChange={this.props.setFieldValue}/>
          </div>
        </div>
        <br/>
        <div class='row'>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Duration</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' rows='5' id='duration' defaultValue={this.state.item.duration} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Casting Time</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' rows='5' id='casting_time' defaultValue={this.state.item.casting_time} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Range(ft.)</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='xs' type='text' id='range' min="0" defaultValue={this.state.item.range} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Concentration
              <ReactBootStrap.Form.Check id='concentration' onClick={this.props.setCheckBoxValue} defaultChecked={this.state.item.concentration}/>
          </ReactBootStrap.Form.Label>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Ritual
            <ReactBootStrap.Form.Check id='ritual' onClick={this.props.setCheckBoxValue} defaultChecked={this.state.item.ritual}/>
          </ReactBootStrap.Form.Label>
          </div>
        </div>
        <br/>
        <div class='row'>
          <div class='col-md-6'>
          <ReactBootStrap.Form.Label>Description</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='desc' defaultValue={this.state.item.desc} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-6'>
          <ReactBootStrap.Form.Label>At Higher Levels</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='higher_level' defaultValue={this.state.item.higher_level} onChange={this.props.setFieldValue}/>
          </div>
        </div>
      </ReactBootStrap.Form.Group>
    )
  }
}

export default SpellForm;
