import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator,Alert } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


class Home extends Component {
    state = {
        todos: [],
        text: '',
        visibilityFilter: 'SHOW_ALL_DOTO',
        isloading: true,
    }

    componentDidMount = async () => {
        // await this.props.onGetAllTodo();
        await this.props.onGetAllTodo();
        this.setState({
            isloading: false,
            todos: this.props.todos
        })
    }

    addTodo = async (text) => {
        if (text != '') {
            const date = new Date();
            const item = {
                id: this.state.todos.length + 1,
                createdAt: date,
                text: text
            }
            await this.props.onAddTodo(item);
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
    onDeleteTodo = async id => {
        await this.props.onToggleTodo(id);
        this.setState({
            todos: this.props.todos,
        });
    };
    onToggleTodo = async (item) => {
        const prompt = `"${item.text}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => this.onDeleteTodo(item.id) }
            ],
            { cancelable: true }
        );
    }
    render() {
        const {
            todos, text, isloading
        } = this.state;
        if (isloading) {
            return (
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Please Wait</Text>
                        <ActivityIndicator size="large" color="black" />
                    </View>
                </View>
            )
        }
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