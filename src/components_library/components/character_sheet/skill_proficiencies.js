import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class SkillProficiencies extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }

  render() {
    return(
      <div class="skills-list">
        <div class="saves-row">
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Athletics (Str) </p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Sleight Of Hand (Dex)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Stealth (Dex)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Acrobatics (Dex)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Deception (Cha)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Intimidation (Cha)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Performance (Cha)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Persuasion (Cha)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Animal Handling (Wis)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Insight (Wis)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Medicine (Wis)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Perception (Wis)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Survival (Wis)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Arcana (Int)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 History (Int)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Investigation (Int)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Nature (Int)</p>
            </ReactBootStrap.Form.Label>
          </div>
          <div class="row saves-box">
            <ReactBootStrap.Form.Label class="form-inline">
              <ReactBootStrap.Form.Check/>
              <p> +3 Religion (Int)</p>
            </ReactBootStrap.Form.Label>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillProficiencies;
