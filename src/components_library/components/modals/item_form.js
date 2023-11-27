import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', item: this.props.item};
  };

  render(){
    return (
      <ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Label>Item Name</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control size='lg' type='text' id='name' defaultValue={this.state.item.name} onChange={this.props.setFieldValue}/>
        <br/>
        <div class='row'>
          <div class='col-md-6'>
            <ReactBootStrap.Form.Label>Item Type</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="text" id="item_type" defaultValue={this.state.item.item_type} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-6'>
          <ReactBootStrap.Form.Label>Damage Type</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='xs' type='text' rows='1' id='dmg_type' defaultValue={this.state.item.dmg_type} onChange={this.props.setFieldValue}/>
          </div>
        </div>
        <br />
        <div class='row'>
          <div class='col-md-2'>
            <ReactBootStrap.Form.Label>AC</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' type='number' id='ac' max="40" min="1" defaultValue={this.state.item.ac} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-4'>
            <ReactBootStrap.Form.Label>Weight</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' id='weight' min="0" defaultValue={this.state.item.weight} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
            <ReactBootStrap.Form.Label>Value (GP)</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' id='value' min="0" defaultValue={this.state.item.value} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Rolls</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' rows='1' id='rolls' defaultValue={this.state.item.rolls} onChange={this.props.setFieldValue}/>
          </div>
        </div>
        <br/>
        <div class='row'>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Damage</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' rows='1' id='damage' defaultValue={this.state.item.damage} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Properties</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='md' type='text' rows='2' id='property' defaultValue={this.state.item.property} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Magic?
              <ReactBootStrap.Form.Check id='magic' onClick={this.props.setCheckBoxValue} defaultChecked={this.state.item.magic}/>
          </ReactBootStrap.Form.Label>
          </div>
          <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Stealth?
            <ReactBootStrap.Form.Check id='stealth' onClick={this.props.setCheckBoxValue} defaultChecked={this.state.item.stealth}/>
          </ReactBootStrap.Form.Label>
          </div>
        </div>
        <br/>
        <div class='row'>
          <div class='col-md-6'>
          <ReactBootStrap.Form.Label>Details</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='details' defaultValue={this.state.item.details} onChange={this.props.setFieldValue}/>
          </div>
          <div class='col-md-6'>
          <ReactBootStrap.Form.Label>Description</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control size='sm' as='textarea' rows='5' id='desc' defaultValue={this.state.item.desc} onChange={this.props.setFieldValue}/>
          </div>
        </div>
      </ReactBootStrap.Form.Group>
    )
  }
}

export default ItemForm;
