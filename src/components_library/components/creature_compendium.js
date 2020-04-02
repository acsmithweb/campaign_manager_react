import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StatBlockComponent from './stat_block_component'

var compendium_is_present = document.getElementById('creature-compendium')

if(compendium_is_present)
  ReactDOM.render(<><CreatureCompendium /></>, document.getElementById('creature-compendium'));

function CreatureCompendium() {
  return (
    <>
      <StatBlockComponent />
    </>
  );
}
export default CreatureCompendium;
