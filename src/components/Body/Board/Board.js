import React, { useState } from "react";
import Task from "../Task/Task";
import TextInput from "../TextInput/TextInput";
import "./Board.css";
import {useSelector, useDispatch} from 'react-redux';

let Board = ({
  title,
  textBox,
  items,
  deleteButton
}) => {

  console.log("todo board", items.map(item => item.title));
  return (
    <>
      <div className="board">
        <div>
          <h3>{title}</h3>
          {textBox}
        </div>
        <div className={'cardsContainer'}> 
          {items && (
            <>
              {items.map(item => (
                 <Task task={item} 
                  />
              ))}
            </>
          )}
         </div> 
        {deleteButton}
      </div>
    </>
  );
};

export default Board;
