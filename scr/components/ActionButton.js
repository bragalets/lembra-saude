// components/ActionButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor: '#4515EB',
    width: 254,
    height: 40,
    borderRadius: 49,
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 12,
    color: '#FFFFFF',
    fontWeight: '800',
  },
});

export default ActionButton;
