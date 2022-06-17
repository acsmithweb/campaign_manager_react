import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class InspProfBox extends React.Component {
  constructor(props){
      super(props);

      this.state = {

      };
  }

  render(){
    return(
      <div>
        <div class="row">
          <ReactBootStrap.Form.Label class="form-inline">
            <sub>Inspiration</sub>
            <ReactBootStrap.Form.Check/>
          </ReactBootStrap.Form.Label>
        </div>
        <div class="row">
          <ReactBootStrap.Form.Label class="form-inline">
            <sub>Proficiency Bonus: </sub>
            <h5 class="prof-bonus">+6</h5>
          </ReactBootStrap.Form.Label>
        </div>
      </div>
    );
  }
}

export default InspProfBox;
