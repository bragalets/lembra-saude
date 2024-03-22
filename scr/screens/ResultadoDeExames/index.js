import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput 
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function ResultadoDeExames() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Uhuuuuu :D </Text>
      <Text style={styles.headerText}>Mais uma tela pra pensar</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});