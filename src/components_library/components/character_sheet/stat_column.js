import React from 'react';
import CharStatBox from './char_stat_box.js';
import * as ReactBootStrap from "react-bootstrap";

class CharStatColumn extends React.Component {
  constructor(props){
    super(props);


  }

  render() {
    return(
      <div class="col-xl-auto">
        <CharStatBox stat_name={'STR'} modifier={'+3'} number={16}/>
        <CharStatBox stat_name={'CON'} modifier={'+3'} number={16}/>
        <CharStatBox stat_name={'DEX'} modifier={'+3'} number={16}/>
        <CharStatBox stat_name={'INT'} modifier={'+3'} number={16}/>
        <CharStatBox stat_name={'WIS'} modifier={'+3'} number={16}/>
        <CharStatBox stat_name={'CHA'} modifier={'+3'} number={16}/>
      </div>
    );
  }
}

export default CharStatColumn;
