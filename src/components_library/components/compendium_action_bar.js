import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/compendium.css";

class CompendiumActionBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className='compendium-sub-nav-bar'>
        <ReactBootStrap.Button id="action-sub-nav-success" onClick={this.props.createAction}> Add {this.props.object}</ReactBootStrap.Button>
        <ReactBootStrap.Button id="action-sub-nav-danger" onClick={this.props.deleteAction}> Remove {this.props.object}</ReactBootStrap.Button>
        <ReactBootStrap.Button id="action-sub-nav-warning" onClick={this.props.editAction}> Edit {this.props.object} </ReactBootStrap.Button>
        <ReactBootStrap.Form>
          <ReactBootStrap.Form.Group onSubmit={this.props.searchAction} id="compendium-search">
            <ReactBootStrap.Button type="submit" id="btn-search" onClick={this.props.searchAction}><FontAwesomeIcon icon={faSearch} /></ReactBootStrap.Button>
            <ReactBootStrap.Form.Control type="text" placeholder="Search Compendium" id="search-bar" value={this.props.search_value} onChange={this.props.updateSearchValue}/>
          </ReactBootStrap.Form.Group>
        </ReactBootStrap.Form>
      </div>
    )
  }
}
export default CompendiumActionBar;
