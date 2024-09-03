import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import ObjectLibrary from './library.js';
import "../styling/ai_chat_window.css"
import {engage_chat} from '../../js/dungeon_master_api_facade.js'
import $ from 'jquery';

class AiChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chat_history: {contents: []}, contents: '',api_key:'placeholder'};

    this.setFieldValue = this.setFieldValue.bind(this);
    this.submitChat = this.submitChat.bind(this);
  }

  setFieldValue(event){
    this.setState({ [event.target.id]:  event.target.value });
  };

  submitChat(event){
    event.preventDefault();
    engage_chat(this.state)
    .then(
      (result) => {
        this.setState({chat_id: result.client_id});
        this.setState({chat_history: result.chat_history});
      }
    )
  }

  render(){
    console.log(this.state);
    var history = this.state.chat_history.contents
    return(
    <div className="chat-container">
       <div className="chat-window">
        <div className="messages-container">
         {history.map(message => (
           <div className={"message from-" + message.role}>
             <p>{message.parts[0].text.split("|markdown entry:")[0]}</p>
           </div>
         ))}
         </div>
         <ReactBootStrap.Form className="input-form">
           <ReactBootStrap.Form.Row className="align-items-center">
             <ReactBootStrap.Col xs={9}>
               <ReactBootStrap.Form.Control type="text" id="contents" placeholder="Type your message..." onChange={this.setFieldValue}/>
               <input type="hidden" name="action" id="chat_id" value={this.state.chat_id}/>
             </ReactBootStrap.Col>
             <ReactBootStrap.Col xs={3}>
               <ReactBootStrap.Button variant="primary" onClick={this.submitChat}>
                 Send
               </ReactBootStrap.Button>
             </ReactBootStrap.Col>
           </ReactBootStrap.Form.Row>
         </ReactBootStrap.Form>
       </div>
     </div>);
   }
 };

 export default AiChatWindow;
