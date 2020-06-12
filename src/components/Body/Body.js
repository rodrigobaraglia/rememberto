import React from "react";
import Board from "./Board/Board";
import TextInput from "./TextInput/TextInput";
import Button from "@material-ui/core/Button";
import "./Body.css";
import { firstUpperCase } from "../../util/util";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/actionCreators";

const Body = props => {
  const state = useSelector(state => state.boards);
  const dispatch = useDispatch()
  const addBoard = title => dispatch(actions.addBoard(title));
  const deleteBoard = title => dispatch(actions.deleteBoard(title));
  const addTask = task => dispatch(actions.addTask(task));
  
  const boards = Object.keys(state);

  return (
    <>
      <TextInput
        submit={addBoard}
        label={"New Board"}
        color={"secondary"}
      />
      <div id="bodyContainer">
        {boards.map((board, index) => (
          <Board
            title={firstUpperCase(board)}
            otherBoards={boards.filter(b => b !== board)}
            items={state[board]}
            deleteButton={
              board !== "todo" && (
                <Button onClick={() => deleteBoard(board)}>
                  <DeleteIcon color="primary"></DeleteIcon>
                </Button>
              )
            }
            textBox={
              index === 0 && (
                <TextInput
                  submit={addTask}
                  label={"New Task"}
                  color={"primary"}
                />
              )
            }
          />
        ))}
      </div>
    </>
  );
};

export default Body;
