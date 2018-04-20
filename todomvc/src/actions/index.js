import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

export function fetchTodos() {
  const request = $.getJSON('http://localhost:3000/api/v1/todos.json');

  return {
    type: types.FETCH_TODOS,
    payload: request
  };
}

export function fetchTodosSuccess(todos) {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload: todos
  };
}