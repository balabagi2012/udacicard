import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AppContainer from "./components/AppContainer";
import reducer from "./reducers";
import { setLocalNotification } from "./utils/helpers";
import { InitializeDataStorage } from "./utils/_DATA";

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
    InitializeDataStorage();
  }

  render() {
    return (
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
    flex: 1,
  },
});
