import React from 'react';
import { Redirect } from 'react-router-dom';

import DialogItem from './DialogItem';
import Message from './Message';
import AddMessageForm from './AddMessageForm';


const Dialogs = (props) => {

   let dialogsElements = props.dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));

   let messagesElements = props.messages.map((message) => (
      <Message text={message.text} key={message.id} id={message.id} />
   ));


   return (
      <div className="dialogs">
         <div className="dialogs__body">
            <ul className="dialogs__names">{dialogsElements}</ul>
            <ul className="dialogs__messages">{messagesElements}</ul>
         </div>
         <AddMessageForm sendMessage={props.sendMessage} />
      </div>
   );
};

export default Dialogs;
