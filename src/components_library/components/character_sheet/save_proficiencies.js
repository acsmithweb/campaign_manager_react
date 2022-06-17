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
        <div class="saving-throws col-xl-12">
          <div class="row">
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 STR</p>
            </div>
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 DEX</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 CON</p>
            </div>
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 INT</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 WIS</p>
            </div>
            <div class="col-sm-6">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <p> +3 CHA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveProficiencies;
