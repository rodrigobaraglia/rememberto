import * as constants from "../actions/constants";
import * as resolvers from "../actions/actionResolvers";

const initialState = {
  todo: [],
  doing: [],
  done: []
};

const boards = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_BOARD:
      return resolvers.resolveAddBoard(state, action);

    case constants.DELETE_BOARD:
      return resolvers.resolveDeleteBoard(state, action);

    case constants.ADD_TASK:
      return resolvers.resolveAddTask(state, action);

    case constants.MOVE_TASK: {
      return resolvers.resolveMoveTask(state, action);
    }
    case constants.ADD_DESCRIPTION:
      return resolvers.resolveAddDescription(state, action);
    default:
      return state;
  }
};

export default boards;
