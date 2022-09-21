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
      <div class="prof-insp">
        <div class="row checkbox-padding">
          <ReactBootStrap.Form.Label class="form-inline">
            <sub>Inspiration</sub>
            <ReactBootStrap.Form.Check/>
          </ReactBootStrap.Form.Label>
        </div>
        <div class="row">
          <ReactBootStrap.Form.Label class="form-inline">
            <sub>Prof. Bonus: +6</sub>
          </ReactBootStrap.Form.Label>
        </div>
      </div>
    );
  }
}

export default InspProfBox;
