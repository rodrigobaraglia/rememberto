import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/actionCreators";

export const useBoards = (contextVariables) => {
    
  const state = useSelector(state => state.boards);
  const dispatch = useDispatch();
  const addBoard = title => dispatch(actions.addBoard()(title));
  const deleteBoard = title => dispatch(actions.deleteBoard()(title));
  const addTask = task => dispatch(actions.addTask()(task));
  const moveTask = otherBoard => {
    dispatch(
      actions.moveTask(
        contextVariables.task,
        contextVariables.board
      )(otherBoard)
    );

      }

  return  [state, addBoard, deleteBoard, addTask, moveTask];
};
