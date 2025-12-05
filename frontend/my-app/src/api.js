import axios from "axios";


const API_URL = 'http://127.0.0.1:8080/api/v1/todos'

export const fetchTodos = () => axios.get(API_URL);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const fetchTodoById = (todoId) => axios.get(`${API_URL}/${todoId}`);
export const updateTodo = (todoId, updatedTodo) => axios.put(`${API_URL}/${todoId}`, updatedTodo);
export const deleteTodo = (todoId) => axios.delete(`${API_URL}/${todoId}`);
