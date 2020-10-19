import ACTIONS from '../../api-config/actions.constants';

/**
 * @description
 * The action to add a todo item
 * @param {object} payload the todo info
 * @returns {object} the add todo action
 */
const addTodo = (payload) => ({ type: ACTIONS.TODO.ADD_TO_DO, data: payload });

/**
 * @description
 * The action to search a todo item
 * @param {object} payload the todo info
 * @returns {object} the search todo action
 */
const searchTodo = (payload) => ({ type: ACTIONS.TODO.SEARCH_TO_DO, data: payload });

export { addTodo, searchTodo };
