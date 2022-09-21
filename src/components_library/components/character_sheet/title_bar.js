import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class TitleBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char_name: this.props.char_name,
      char_class: this.props.char_class,
      level: this.props.level,
      background: this.props.background,
      player_name: this.props.player_name,
      race: this.props.race,
      alignment: this.props.alignment,
      exp: this.props.experience
    };
  }

  render() {
    return(
      <div class="title-bar">
        <div class="top-row row">
          <div class="col-sm-6">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.char_name}/>
            <sup><i>character name</i></sup>
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.char_class + '/' + this.props.level}/>
            <sup><i>Class & Level</i></sup>
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.background}/>
            <sup><i>Background</i></sup>
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.player_name}/>
            <sup><i>Player Name</i></sup>
          </div>
        </div>
        <div class="bottom-row row">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.race}/>
            <sup><i>Race</i></sup>
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.alignment}/>
            <sup><i>Alignment</i></sup>
          </div>
          <div class="col-sm-2">
            <ReactBootStrap.Form.Control size='sm' type='text' id='char_name' placeholder={this.props.exp}/>
            <sup><i>Experience</i></sup>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
