import {connect} from 'react-redux';
import Home from '../Home';
import * as action from '../actions/index';


const mapStateToProps = function(state){
    return {todos : state.todos}
}
const mapDispatchToProps = function(dispatch){
    return {
        onAddTodo : text =>{
            dispatch(action.onAddTodo(text))
        },
        onToggleTodo : id =>{
            dispatch(action.onToggleTodo(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default TodoContainer;