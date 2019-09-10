import { connect } from 'react-redux';
import Home from '../Home';
import * as action from '../actions/index';
import { apiTodoList } from '../apis/index';

const mapStateToProps = function (state) {
    return { todos: state.todos }
}
const mapDispatchToProps = function (dispatch) {
    return {
        onGetAllTodo: async () => {
            const list = await apiTodoList.getAllTodoApi();
            dispatch(action.onGetAllTodo(list));
        },
        onAddTodo: async item => {
            apiTodoList.addTodoApi(item);
            dispatch(action.onAddTodo(item))
        },
        onToggleTodo: id => {
            apiTodoList.deleteTodoApi(id);
            dispatch(action.onToggleTodo(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default TodoContainer;