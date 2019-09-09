import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class Home extends Component {

    state = {
        todos: [],
        text: '',
        visibilityFilter: 'SHOW_ALL_DOTO'
    }

    addTodo = async (text) => {
        if (text != '') {
            await this.props.onAddTodo(text);
            this.setState({
                text: '',
                todos: this.props.todos,
            });
        }
        else {
            alert("Write somthing!");
        }
    }
    onChangeText = (text) => {
        this.setState({
            text: text,
        });
    }
    onToggleTodo = async (id) => {
        await this.props.onToggleTodo(id);
        this.setState({
            todos: this.props.todos,
        });
    }
    render() {
        const {
            todos, text
        } = this.state;
        return (
            <View style={styles.container}>
                <AddTodo
                    text={text}
                    onPressAddTodo={this.addTodo}
                    onChangeText={this.onChangeText}
                />
                <View>
                    <TodoList
                        todos={todos}
                        onToggleTodo={this.onToggleTodo}
                    />
                </View>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});