import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { lightestBlue, azureWhite, black } from '../utils/colors';
import DeckList from './DeckList';

const addDeckButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('CreateNewDeck') }}>
      <Foundation
        name='plus'
        size={28}
        color={lightestBlue}
        style={{marginRight: 10}}
      />
    </TouchableOpacity>
  );
}

class Home extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: "Decks",
      headerRight: () => addDeckButton(this.props.navigation),
    });
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: azureWhite}}>
        <DeckList navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default Home;
