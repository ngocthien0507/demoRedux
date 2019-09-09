import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TodoList extends Component {

    render() {
        const {
            todos,
            onToggleTodo
        } = this.props;
        return (
            <View>
                {todos.map(todo => {
                    return (
                        <TouchableOpacity key={todo.id} onPress={()=>onToggleTodo(todo.id)}>
                            <Text style={{
                                fontSize: 24,
                                textDecorationLine: todo.completed ? 'line-through' : 'none',
                            }}>{todo.text}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

export default TodoList;
