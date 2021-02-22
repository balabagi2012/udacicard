import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { setLocalNotification } from './utils/helpers';
import { InitializeDataStorage } from './utils/_DATA';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppContainer from './components/AppContainer';
import { Constants } from 'expo';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
    InitializeDataStorage()
  }


  render() { 
    return (
      // <View style={styles.container}>
      // <Text>Open up App.js to start working on your app!</Text>
      // <StatusBar style="auto" />
      // </View>
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer /> 
          <StatusBar translucent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
