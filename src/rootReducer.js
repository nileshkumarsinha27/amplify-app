import { combineReducers } from 'redux';
import todo from './containers/todo/Todo.reducer';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
