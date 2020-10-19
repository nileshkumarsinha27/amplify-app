import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from './todo.actions';
import InputComponent from '../../components/imputComponent/InputComponent';
import TO_DO_CONSTANTS from './todo.constants';
import './todo.scss';
import { isDataExists } from '../../utils/utils';

/**
 * @description
 * Function to render the todo component
 * @returns {node} todo component
 */
const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  /**
   * @description
   * Function to handle the enter press
   */
  const keyUpHandler = (value) => {
    dispatch(addTodo({ value, id: uuidv4() }));
  };
  /**
   * @description
   * Function to render the todo list
   * @returns {node} the todo list
   */
  const renderTodos = () => (
    <>
      <p>{TO_DO_CONSTANTS.LIST_TO_DO.SECTION_TITLE}</p>
      <ul className="todo-list">
        {todos.map(({ value, id }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
    </>
  );
  /**
   * @description
   * Function to render empty to do list
   * @returns {node} the empty to do list
   */
  const renderEmpty = () => (
    <div className="empty-list">
      <span>{TO_DO_CONSTANTS.LIST_TO_DO.EMPTY}</span>
    </div>
  );
  return (
    <div className="todo-container">
      <div className="todo-section add-todo">
        <InputComponent
          placeholder={TO_DO_CONSTANTS.ADD_TO_DO.INPUT.PLACEHOLDER}
          keyUpHandler={keyUpHandler}
        />
      </div>
      <div className="todo-section list-todo">
        {isDataExists(todos) ? renderTodos() : renderEmpty()}
      </div>
    </div>
  );
};

export default Todo;
