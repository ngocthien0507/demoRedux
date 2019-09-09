import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import TodoContainer from './container/TodoContainer';
import store from './store';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <TodoContainer />
      </Provider>
    );
  }
}

