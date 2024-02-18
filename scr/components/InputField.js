import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputField = ({ label, placeholder, secureTextEntry, onChangeText }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 16,
    marginLeft: 60,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#6371EB',
    alignSelf: 'center',
    width: 254,
    height: 40,
    borderRadius: 49,
    textAlign: 'center',
  },
});

export default InputField;