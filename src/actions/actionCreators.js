import * as acts from "./constants";



export const addBoard = title => ({ type: acts.ADD_BOARD, title });
export const deleteBoard = title => ({ type: acts.DELETE_BOARD, title });
export const addTask = task => ({ type: acts.ADD_TASK, task });
export const moveTask = (task, from) => to => ({
  type: acts.MOVE_TASK,
  from,
  to,
  task
});
export const addDescription = (board, title) => description => ({
  type: acts.ADD_DESCRIPTION,
  board,
  title,
  description
});
export const addActivity = (board, title, activity) => ({
  type: acts.ADD_ACTIVITY,
  board,
  title,
  activity
});


