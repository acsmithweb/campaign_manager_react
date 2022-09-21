import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../styling/stat_block_library.css';

class SpellBlockComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      item: this.props.item
    };

    this.selectSpellBlock = this.selectSpellBlock.bind(this);
  }

  selectSpellBlock(e) {
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
      <div class="stat-block col-xl-5 col-sm-8">
        <div class="orange-border">
        </div>
        <ReactBootStrap.Form.Check onClick={this.selectSpellBlock} value={item.id}/>
        <div class="creature-heading">
          <h1> {item.name} </h1>
          <h2> {item.school} Level-{item.level} {item.ritual ? '(ritual)' : ''} / {this.formatArrays(item.classes)}</h2>
        </div>
        <svg height="5" width="150%" class="tapered-rule">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <div class="top-stats">
          <div class="property-line first">
            <h4>Casting Time: </h4>
            <p>{item.casting_time}</p>
          </div>
          <div class="property-line">
            <h4>Range: </h4>
            <p>{item.range}</p>
          </div>
          <div class="property-line">
            <h4>Components: </h4>
            <p>{this.formatArrays(item.components)} ({item.material})</p>
          </div>
          <div class="property-line">
            <h4>Duration: </h4>
            <p>{item.concentration ? 'Concentration, ' : ''} {item.duration}</p>
          </div>
        </div>
        <div class="property-block">
          <p>{this.formatArrays(item.desc)} {"\n"}</p>
          {(item.higher_level ? <div><h4>At Higher Levels: </h4> <p>{this.formatArrays(item.higher_level)}</p></div> : '')}
        </div>
      </div>
    );
    else if (this.props.compact == true){
      return (
      <div class="stat-block wide">
        <div class="creature-heading">
          <ReactBootStrap.Form.Check value={item.id}/>
          <h1> {item.name} </h1>
          <h2>Casting Time: {item.casting_time}</h2>
          <h2>Level-{item.level} {item.ritual ? '(ritual)' : ''} </h2>
          <h2>Duration: {item.duration}, {item.concentration ? 'Concentration, ' : ''} </h2>
          <h2>Components: {this.formatArrays(item.components)} ({item.material})</h2>
          <h2>Range: {item.range}</h2>
          <h2>Damage Type: {item.damage_type}</h2>
        </div>
      </div>);
    }
  }
}

export default SpellBlockComponent
