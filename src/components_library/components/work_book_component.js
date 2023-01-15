import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../styling/stat_block_library.css';
import ObjectLibrary from './library.js';

class WorkBookComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      item: this.props.item
    };
  }

  render() {
    var item = this.props.item;
    return(
      <div>
        <div>{item.workbook_data.workbook_name}</div>
        <div class='row'>
          <div class='col-6'>
            <div>Spells</div>
              <ObjectLibrary
                filteredObjects={item.workbook_records.spells}
                obj_component={'SpellBlockComponent'}
                compact={false}
                object_type={'spells'}
                key = {this.state.key}
              />
          </div>
          <div class='col-6'>
            <div>Items</div>
              <ObjectLibrary
                filteredObjects={item.workbook_records.items}
                obj_component={'ItemBlockComponent'}
                compact={false}
                object_type={'items'}
                key = {this.state.key}
              />
          </div>
        </div>
        <div>Monsters</div>
        <ObjectLibrary
          filteredObjects={item.workbook_records.stat_blocks}
          obj_component={'StatBlockComponent'}
          compact={false}
          object_type={'stat_blocks'}
          key = {this.state.key}
        />
      </div>
    );
  }
}

export default WorkBookComponent
