import React from 'react';
import CharStatColumn from './character_sheet/stat_column.js';
import TitleBar from './character_sheet/title_bar.js';
import InspProfBox from './character_sheet/insp_prof_box.js'
import SaveProficiencies from './character_sheet/save_proficiencies.js'
import "../styling/character_sheet_component.css";
import * as ReactBootStrap from "react-bootstrap";

class CharacterSheetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <div class='character-sheet-container'>
        <div class="row">
          <TitleBar char_name={"Brutus"} char_class={"Rogue"} level={12} background={"Merchant"} player_name={"Aaron Smith"} race={"Tabaxi"} alignment="Lawful Good" exp="25000"/>
        </div>
        <div class="container col-xl-12">
          <div class="row">
            <CharStatColumn/>
            <div class="col-xl-10">
              <div class="row">
                <InspProfBox/>
              </div>
              <div class="row">
                <SaveProficiencies/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheetComponent;
