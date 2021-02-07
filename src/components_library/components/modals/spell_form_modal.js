import React from 'react'
import * as ReactbootStrap from "react-bootstrap"
import {add_spell} from '../../../js/spell_api_facade'

class SpellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.setFieldValue = this.setFieldValue.bind(this);
    this.addSpellToCompendium = this.addSpellToCompendium.bind(this);
    this.submitSpelltoCompendium = this.submitSpelltoCompendium.bind(this);
  };

  setFieldValue(event){
    this.setState({ [event.target.id]: event.target.value });
  };

  addSpellToCompendium(event) {
    this.submitSpelltoCompendium(event);
  };

  submitSpelltoCompendium(event) {
    add_spell(this.state);
    this.props.toggleAddSpellModal();
  }

  render() {

    return ();
  }
}

export default SpellForm
