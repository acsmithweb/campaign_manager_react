import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../styling/stat_block_library.css';

class ItemBlockComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      item: this.props.item
    };

    this.selectItemBlock = this.selectItemBlock.bind(this);
  }

  selectItemBlock(e) {
    const {checked, value} = e.target;
    checked ? this.props.addIdToSelectList(value) : this.props.removeIdFromSelectList(value);
  };


  formatArrays(array) {
    if (array == null) {
      return ''
    }
    else {
      return array.replace(/[\[\]\"']+/g,'')
    }
  };

render() {
  var item = this.props.item;
  if(this.props.compact == false || this.props.compact == null)
    return(
      <div class="stat-block">
        <div class="orange-border">
        </div>
        {this.selectSpellBlock === undefined ? <ReactBootStrap.Form.Check onClick={this.selectItemBlock} value={item.id}/> : null}
        <div class="creature-heading">
          <h1> {item.name} </h1>
          <h2> {item.item_type} {item.details} {item.property}</h2>
        </div>
        <svg height="5" width="150%" class="tapered-rule">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <div class="top-stats">
          <div class="property-line first">
            <h4>{item.magic ? "magical" : ''}</h4>
          </div>
          <div class="property-line">
            <h4>{item.ac ? 'AC:' + item.ac : ''}</h4>
            <p>{item.stealth ? '' : ' Stealth Disadvantage'}</p>
          </div>
          <div class="property-line">
            <h4>Weight: </h4>
            <p>{item.weight}</p>
          </div>
          <div class="property-line">
            <h4>Value: </h4>
            <p>{item.value}</p>
          </div>
          <div class="property-line">
            <h4>{item.damage ? "Damage:" : '' }</h4>
            <p>{item.damage ? item.damage : '' }</p>
            <p>{item.dmg_type ? item.dmg_type : '' }</p>
          </div>
        </div>
        <div class="property-block">
          <p>{item.desc}</p>
        </div>
        <div class="property-block">
          <p>{this.formatArrays(item.rolls)} {"\n"}</p>
        </div>
      </div>
    );
    else if (this.props.compact == true){
      return (
      <div class="stat-block wide">
        <div class="creature-heading">
          <ReactBootStrap.Form.Check value={item.id}/>
          <h1> {item.name} </h1>
          <h2>Item Type: {item.item_type}</h2>
          <h2>Item Property: {item.property}</h2>
          <h2>Value: {item.value}</h2>
          <h2>Weight: {item.weight}</h2>
        </div>
      </div>);
    }
  }
}

export default ItemBlockComponent
