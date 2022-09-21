import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class SaveProficiencies extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }

  render() {
    return(
      <div>
        <div class="saves-row">
          <div class="row">
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 STR</p>
              </ReactBootStrap.Form.Label>
            </div>
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 DEX</p>
              </ReactBootStrap.Form.Label>
            </div>
          </div>
          <div class="row">
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 CON</p>
              </ReactBootStrap.Form.Label>
            </div>
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 INT</p>
              </ReactBootStrap.Form.Label>
            </div>
          </div>
          <div class="row">
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 WIS</p>
              </ReactBootStrap.Form.Label>
            </div>
            <div class="saves-box">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
                <p> +3 CHA</p>
              </ReactBootStrap.Form.Label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveProficiencies;
