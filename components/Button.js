import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { black, azureWhite } from '../utils/colors';

export default function Button ({ onPress, text }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: black,
    padding: 10,
    marginTop: 20,
    borderRadius: 20
  },
  buttonText: {
    color: azureWhite,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
});
