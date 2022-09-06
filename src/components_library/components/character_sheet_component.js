import React from 'react';
import CharStatColumn from './character_sheet/stat_column.js';
import TitleBar from './character_sheet/title_bar.js';
import InspProfBox from './character_sheet/insp_prof_box.js'
import SaveProficiencies from './character_sheet/save_proficiencies.js'
import SkillProficiencies from './character_sheet/skill_proficiencies.js'
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
            <div class="col-xl-auto">
              <div class="row">
                <InspProfBox/>
              </div>
              <div class="row">
                <SaveProficiencies/>
              </div>
              <div class="row">
                <SkillProficiencies/>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="row">
                <div class="armor-class">
                  <div class="row">
                    <h6 class="combat-value">16</h6>
                  </div>
                  <div class="row">
                    <sub class="combat-label">ARMOR CLASS</sub>
                  </div>
                </div>
                <div class="init">
                  <div class="row">
                    <h6 class="combat-value">+2</h6>
                  </div>
                  <div class="row">
                    <sub class="combat-label">INITIATIVE</sub>
                  </div>
                </div>
                <div class="speed">
                  <div class="row">
                    <h6 class="combat-value">30ft</h6>
                  </div>
                  <div class="row">
                    <sub class="combat-label">SPEED</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheetComponent;
