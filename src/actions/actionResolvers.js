import { Task } from '../util/models';

export const resolveAddBoard = (state, action) => ({
  ...state,
  [action.title]: []
});

export const resolveDeleteBoard = (state, action) => {
  const newState = { ...state };
  delete newState[action.title];
  return newState;
};

export const resolveAddTask = (state, action) => ({
  ...state,
  todo: [...state.todo, new Task(action.task, action.task)]
});

export const resolveMoveTask = (state, action) => {
  const newState = { ...state };
  const task = { ...action.task };
  task.status = action.to;
  newState[action.to].push(task);
  newState[action.from] = newState[action.from].filter(
    t => t.id !== action.task.id
  );
  return newState;
};
export const resolveAddDescription = (state, action) => {
  const newState = { ...state };
  const task = newState[action.board].filter(
    item => item.title === action.title
  );
  task[0].setDescription(action.description);
  return newState;
};
