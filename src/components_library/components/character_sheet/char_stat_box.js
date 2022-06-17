import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class CharStatBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      stat_name: this.props.stat_name,
      modifier: this.props.modifier,
      number: this.props.number
    }
  }

  render() {
    return(
      <div class="stat-box">
        <div class="row">
          <sub class="stat-title">{this.state.stat_name}</sub>
        </div>
        <div class="row">
          <h3 class="stat-mod">{this.state.modifier}</h3>
        </div>
        <div class="row">
          <h6 class="stat-value">{this.state.number}</h6>
        </div>
      </div>
    )
  }
}

export default CharStatBox;
