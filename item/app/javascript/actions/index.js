import axios from 'axios';
import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

export const fetchTodosBegin = () => ({
  type: types.FETCH_TODOS
});

export const fetchTodosSuccess = todos => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: { todos }
});

export function fetchTodos() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:3000/api/v1/todos.json',
    headers: []
  });

  return dispatch => {
    return request.then(todos => {
      dispatch(fetchTodosSuccess(todos));
      todos;
    })
  }
}

// export function fetchTodosBegin() {
//   const request = axios({
//     method: 'get',
//     url: 'http://localhost:3000/api/v1/todos.json',
//     headers: []
//   });
//   // const request = $.getJSON();

//   return {
//     type: types.FETCH_TODOS,
//     payload: request
//   };
// }

// export function fetchTodosSuccess(todos) {
//   return {
//     type: types.FETCH_TODOS_SUCCESS,
//     payload: todos
//   };
// }
