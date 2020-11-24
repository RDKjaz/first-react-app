import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={d.dialog + " " + d.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={d.dialog}>{props.text}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Petr" },
    { id: 2, name: "Kevin" },
    { id: 3, name: "Polina" },
    { id: 4, name: "Katya" },
    { id: 5, name: "Vika" },
  ];

  let messagesData = [
    { id: 1, text: "Hello" },
    { id: 2, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit" },
  ];

  let dialogsElements = dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messageElements = messagesData.map((mes) => <Message text={mes.text} />);

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogsElements}</div>
      <div className={d.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
