import React from 'react'
import ReactDOM from 'react-dom'
import './stat_block.css'

class StatBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
  fetch("http://localhost:3000/stat_blocks")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
   const { error, isLoaded, items } = this.state;
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <ul>
         {items.map(item => (
           <div class="stat-block wide">
	<hr class="orange-border" />
	<div class="section-left">
		<div class="creature-heading">
			<h1>{item.name}</h1>
			<h2>{item.creature_type} {item.alignment}</h2>
		</div>
		<svg height="5" width="100%" class="tapered-rule">
	    <polyline points="0,0 400,2.5 0,5"></polyline>
	  </svg>
		<div class="top-stats">
			<div class="property-line first">
				<h4>Armor Class</h4>
				<p>{item.armor_class}</p>
			</div>
			<div class="property-line">
				<h4>Hit Points</h4>
				<p>{item.hit_points}</p>
			</div>
			<div class="property-line last">
				<h4>Speed</h4>
				<p>{item.speed}</p>
			</div>
			<svg height="5" width="100%" class="tapered-rule">
	    <polyline points="0,0 400,2.5 0,5"></polyline>
	  </svg>
			<div class="abilities">
				<div class="ability-strength">
					<h4>STR</h4>
					<p>{item.str}</p>
				</div>
				<div class="ability-dexterity">
					<h4>DEX</h4>
					<p>{item.dex}</p>
				</div>
				<div class="ability-constitution">
					<h4>CON</h4>
					<p>{item.con}</p>
				</div>
				<div class="ability-intelligence">
					<h4>INT</h4>
					<p>{item.int}</p>
				</div>
				<div class="ability-wisdom">
					<h4>WIS</h4>
					<p>{item.wis}</p>
				</div>
				<div class="ability-charisma">
					<h4>CHA</h4>
					<p>{item.cha}</p>
				</div>
			</div>
			<svg height="5" width="100%" class="tapered-rule">
	    <polyline points="0,0 400,2.5 0,5"></polyline>
	  </svg>
     <div class="property-line">
				<h4>Skills: </h4>
				<p>{item.saving_throws} {item.skills}</p>
			</div>
      <div class="property-line">
				<h4>Damage Vulnerabilities: </h4>
				<p></p>
			</div>
			<div class="property-line">
				<h4>Damage Immunities: </h4>
				<p>{item.damage_resistance} {item.condition_immunities}</p>
			</div>
			<div class="property-line">
				<h4>Senses: </h4>
				<p>{item.senses}</p>
			</div>
			<div class="property-line">
				<h4>Languages: </h4>
				<p>{item.languages}</p>
			</div>
			<div class="property-line last">
				<h4>Challenge Rating: </h4>
				<p>{item.challenge_rating} ({item.experience_points} xp)</p>
			</div>
		</div>
		<svg height="5" width="100%" class="tapered-rule">
	    <polyline points="0,0 400,2.5 0,5"></polyline>
	  </svg>
   	<div class="property-block">
			<p>{item.abilities}</p>
		</div>
	</div>
	<div class="section-right">
 		<div class="actions">
			<h3>Actions</h3>
      			<div class="property-block">
				<p>{item.actions}</p>
			</div>
		</div>
		<div class="actions">
      <h3>Legendary Actions</h3>
            <div class="property-block">
        <p>{item.lgendary_actions}</p>
      </div>
					</div>
		</div>
    <hr class="orange-border bottom" />
	</div>
         ))}
       </ul>
     );
   }
 }

}

ReactDOM.render(<StatBlock />, document.getElementById('root'));

export default StatBlock
