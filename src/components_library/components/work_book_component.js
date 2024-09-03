import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../styling/work_book_library.css';
import ObjectLibrary from './library.js';
import InfoObjectModal from './modals/info_modal.js';

class WorkBookComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      item: this.props.item,
      info_item: null,
      info_item_type: null,
      show_info_modal: false
    };

    this.toggleInfoModal = this.toggleInfoModal.bind(this);
  }

  toggleInfoModal(selected_item, item_type){
    this.setState({info_item: selected_item, info_item_type: item_type}, () => {
      this.setState({show_info_modal: !this.state.show_info_modal});
    });
  }

  render() {
    var item = this.props.item;
    var spells = item.workbook_records.spells;
    var items = item.workbook_records.items;
    var stat_blocks = item.workbook_records.stat_blocks;
    return(
      <div class='basic-workbook'>
        <InfoObjectModal
          item = {this.state.info_item}
          toggleModal = {this.toggleInfoModal}
          show = {this.state.show_info_modal}
          obj_component = {this.state.info_item_type}
        />
        <div class='row workbook-top'>
          <div class='col-12'>{item.workbook_data.workbook_name}</div>
        </div>
        <div class='row'>
          <div class='lib-window col-6'>
          Spells
              <div class='row'>
                <div class='col-3'> Name </div>
                <div class='col-1'> Level </div>
                <div class='col-2'> Cast Time </div>
                <div class='col-2'> Range </div>
                <div class='col-1'> Conc. </div>
                <div class='col-1'> Ritual </div>
                <div class='col-2'> Components </div>
              </div>
            <div class='inner-window'>
              {spells.map(spell => (
                <div class='row record-line' onClick={() => this.toggleInfoModal(spell, 'SpellBlockComponent')}>
                  <div class='col-3'> {spell.name} </div>
                  <div class='col-1'> {spell.level} </div>
                  <div class='col-2'> {spell.casting_time} </div>
                  <div class='col-2'> {spell.range} </div>
                  <div class='col-1'> {spell.concentration ? 'Y' : 'N'} </div>
                  <div class='col-1'> {spell.ritual ? 'Y' : 'N'} </div>
                  <div class='col-2'> {spell.components} </div>
                </div>
              ))}
            </div>
          </div>
          <div class='lib-window col-6'>
            <div>Items</div>
            <div class='row'>
              <div class='col-6'> Name </div>
              <div class='col-2'> Item Type </div>
              <div class='col-2'> Value </div>
              <div class='col-2'> Weight </div>
            </div>
            <div class='inner-window'>
            {items.map(item_record => (
              <div class='row record-line' onClick={() => this.toggleInfoModal(item_record, 'ItemBlockComponent')}>
                <div class='col-6'> {item_record.name} </div>
                <div class='col-2'> {item_record.item_type} </div>
                <div class='col-2'> {item_record.value} </div>
                <div class='col-2'> {item_record.weight} </div>
              </div>
            ))}
            </div>
          </div>
          <div class='lib-window col-12'>
            <div>Monsters</div>
            <div class='row'>
              <div class='col-4'> Name </div>
              <div class='col-2'> Creature Type </div>
              <div class='col-2'> Size </div>
              <div class='col-1'> CR </div>
              <div class='col-2'> HP </div>
              <div class='col-1'> AC </div>
            </div>
            <div class='inner-window'>
            {stat_blocks.map(stat_block => (
              <div class='row record-line' onClick={() => this.toggleInfoModal(stat_block, 'StatBlockComponent')}>
                <div class='col-4'> {stat_block.name} </div>
                <div class='col-2'> {stat_block.creature_type} </div>
                <div class='col-2'> {stat_block.size} </div>
                <div class='col-1'> {stat_block.challenge_rating} </div>
                <div class='col-2'> {stat_block.hit_points} </div>
                <div class='col-1'> {stat_block.armor_class} </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkBookComponent
