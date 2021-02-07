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
  }

render() {
  var item = this.state.item;
    return(
      <div class="stat-block wide">
        <div class="orange-border">
        </div>
        <ReactBootStrap.Form.Check onClick={this.selectSpellBlock} value={item.id}/>
        <div class="creature-heading">
          <h1> {item.name} </h1>
          <h2> {item.school} Level-{item.level} {item.ritual ? '(ritual)' : ''} / {item.classes.replace(/[\[\]\"']+/g,'')}</h2>
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
            <p>{item.components.replace(/[\[\]\"']+/g,'')} ({item.material})</p>
          </div>
          <div class="property-line">
            <h4>Duration: </h4>
            <p>{item.concentration ? 'Concentration, ' : ''} {item.duration}</p>
          </div>
        </div>
        <div class="property-block">
          <p>{item.desc.replace(/[\[\]\"']+/g,'')} {"\n"}</p>
          {(item.higher_level ? <div><h4>At Higher Levels: </h4> <p>{item.higher_level.replace(/[\[\]\"']+/g,'')}</p></div> : '')}
        </div>
      </div>
    );
  }
}

export default SpellBlockComponent
