import ACTIONS from '../../api-config/actions.constants';

const initialState = {
  todos: [],
  refTodos: [],
};

const todo = (state = initialState, action) => {
  let tempState = { ...state };
  switch (action.type) {
    case ACTIONS.TODO.ADD_TO_DO:
      tempState = {
        ...tempState,
        todos: [...tempState.todos, action.data],
        refTodos: [...tempState.todos, action.data],
      };
      return tempState;
    default:
      return tempState;
  }
};

export default todo;
