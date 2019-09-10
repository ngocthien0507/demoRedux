import React, { Component } from 'react';
import { View, Text, TouchableOpacity , ScrollView } from 'react-native';

class TodoList extends Component {

    render() {
        const {
            todos,
            onToggleTodo
        } = this.props;
        return (
            <ScrollView>
                {todos.map(todo => {
                    return (
                        <TouchableOpacity style={{borderColor:'gray', borderWidth:1}} key={todo.id} onPress={()=>onToggleTodo(todo)}>
                            <Text style={{
                                fontSize: 24,
                                textDecorationLine: todo.completed ? 'line-through' : 'none',
                            }}>{todo.text}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        );
    }
}

export default TodoList;
