import React from 'react';
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
      <div class="character-sheet">
        <div class="row title-bar">
          <div class="col-sm-3">
            <h6> Character Name Here </h6>
            <sub>character name</sub>
          </div>
          <div class="identity-box col-sm-9">
            <div class="top-row row">
              <div class="col-sm-2">
                <h6>Wiz/9</h6>
                <sub>Class & Level</sub>
              </div>
              <div class="col-sm-2">
                <h6>Merchant</h6>
                <sub>Background</sub>
              </div>
              <div class="col-sm-2">
                <h6>Aaron Smith</h6>
                <sub>Player Name</sub>
              </div>
            </div>
            <div class="bottom-row row">
              <div class="col-sm-2">
                <h6>Tabaxi</h6>
                <sub>Race</sub>
              </div>
              <div class="col-sm-2">
                <h6>Lawful Good</h6>
                <sub>Alignment</sub>
              </div>
              <div class="col-sm-2">
                <h6>25000xp</h6>
                <sub>Experience</sub>
              </div>
            </div>
          </div>
        </div>
        <div class="row strength-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">STRENGTH</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">16</h6>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <sub>Inspiration</sub>
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <sub>Proficiency Bonus</sub>
                <h5 class="prof-bonus">+6</h5>
              </ReactBootStrap.Form.Label>
            </div>
          </div>
          <div class="col-sm-3 combat-section">
            <div class="row">
              <div class="combat-box armor-class">
                <div class="row">
                  <h6 class="combat-value">16</h6>
                </div>
                <div class="row">
                  <sub class="combat-label">ARMOR CLASS</sub>
                </div>
              </div>
              <div class="combat-box init">
                <div class="row">
                  <h6 class="combat-value">+2</h6>
                </div>
                <div class="row">
                  <sub class="combat-label">INITIATIVE</sub>
                </div>
              </div>
              <div class="combat-box speed">
                <div class="row">
                  <h6 class="combat-value">30ft</h6>
                </div>
                <div class="row">
                  <sub class="combat-label">SPEED</sub>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 personality-traits">
          <ReactBootStrap.Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
            <ReactBootStrap.Form.Control as="textarea" placeholder="Personality Traits"/>
          </ReactBootStrap.Form.Group>
          </div>
        </div>
        <div class="row dex-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">DEXTERITY</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">12</h6>
            </div>
          </div>
          <div class="saving-throws col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>STR</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>DEX</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>CON</sub>
            </div>
          </div>
          <div class="saving-throws col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>INT</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>WIS</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>CHA</sub>
            </div>
          </div>
          <div class="hp-box col-sm-2">
            <div class="row">
              <div class="max-hp col-sm-2">
                <sub>Maximum HP</sub>
                <h6> 123 </h6>
              </div>
            </div>
            <div class="row">
              <div class="current-hp col-sm-2">
                <sub>Current HP</sub>
                <input type="number" id="current-hp"></input>
              </div>
              <div class="current-hp col-sm-2">
                <sub>Temp HP</sub>
                <input type="number" id="current-hp"></input>
              </div>
            </div>
          </div>
          <div class="col-sm-4 personality-traits">
          <ReactBootStrap.Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
            <ReactBootStrap.Form.Control as="textarea" placeholder="Ideals"/>
          </ReactBootStrap.Form.Group>
          </div>
        </div>
        <div class="row con-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">CONSTITUTION</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">12</h6>
            </div>
          </div>
          <div class="skills col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Acrobatics</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Animal Handling</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Arcana</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Athletics</sub>
            </div>
          </div>
        <div class="bottom-health col-sm-2">
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
              <sub>Total</sub>
                <ReactBootStrap.Form.Control as="textarea" placeholder="Total Hit Dice" id='total-hit-dice'/>
              </div>
              <div class="row">
                <ReactBootStrap.Form.Control as="textarea" placeholder="Hit Dice" id='remaining-hit-dice'/>
              </div>
              <div class="row">
                <sub>Hit Dice</sub>
              </div>
            </div>
            <div class="col-sm-6">
              <sub>Failures</sub>
              <div class="row">
                <ReactBootStrap.Form.Check/>
                <ReactBootStrap.Form.Check/>
                <ReactBootStrap.Form.Check/>
              </div>
              <sub>Successes</sub>
              <div class="row">
                <ReactBootStrap.Form.Check/>
                <ReactBootStrap.Form.Check/>
                <ReactBootStrap.Form.Check/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="row int-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">INTELLIGENCE</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">12</h6>
            </div>
          </div>
          <div class="skills col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Deception</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>History</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Insight</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Intimidation</sub>
            </div>
          </div>
        </div>
        <div class="row wis-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">WISDOM</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">12</h6>
            </div>
          </div>
          <div class="skills col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>History</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Investigation</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Medicine</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Nature</sub>
            </div>
          </div>
        </div>
        <div class="row cha-row">
          <div class="stat-box col-sm-1">
            <div class="row">
              <sub class="stat-title">CHARISMA</sub>
            </div>
            <div class="row">
              <h3 class="stat-mod">+3</h3>
            </div>
            <div class="row">
              <h6 class="stat-value">12</h6>
            </div>
          </div>
          <div class="skills col-sm-2">
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Performance</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Persuasion</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Religion</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Sleight of Hand</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Stealth</sub>
            </div>
            <div class="row">
              <ReactBootStrap.Form.Label class="form-inline">
                <ReactBootStrap.Form.Check/>
              </ReactBootStrap.Form.Label>
              <sub> +3 </sub>
              <sub>Survival</sub>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheetComponent;
