import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddTodo extends Component {

    render() {
        const{
            text,
            onPressAddTodo,
            onChangeText
        } = this.props
        return (
            <View style={styles.container}>
                <TextInput
                    value = {text}
                    onChangeText = {text => onChangeText(text)}
                    placeholder="create todo: "
                    style={{
                        borderWidth: 1, borderColor: 'gray',
                        height: 50, flex: 1, padding: 5,
                        backgroundColor: '#eaeaea'
                    }}
                />
                <TouchableOpacity onPress={()=>onPressAddTodo(text)}>
                    <View style={{
                        height: 50, backgroundColor: '#eaeaea',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Ionicons name="md-add" size={30}
                            style={{ color: '#de9595', padding: 10 }}
                        />
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
