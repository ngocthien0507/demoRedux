import { requestTodoList, deleteRequest } from '../helper/index';

export const getAllTodoApi = () =>{
    return requestTodoList('TodoList','get',null);
}

export const addTodoApi = item =>{
    return requestTodoList('TodoList','post',item);
}

export const deleteTodoApi = id =>{
    return deleteRequest('TodoList','delete',id)
}