import React, { Component } from "react";
import { View } from "react-native";
import { azureWhite } from "../utils/colors";
import DeckList from "./DeckList";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: azureWhite }}>
        <DeckList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Home;
