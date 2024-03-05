import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
   } from 'react-native';

import * as Animatable from 'react-native-animatable';


export default function Dashboard() {
  return(
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'/>   
      </View>


      <View style={styles.topBackground}>
        <Image
          source={require('../../assets/Group 15.png')}
          style={{ width: '100%', height: '50%' }}
          resizeMode='contain'
        />
      </View>


      <View style={styles.helloText}>
        <Text style={styles.helloPhrase}>Olá,</Text>
        <Text style={styles.helloName}>Letícia!</Text>
      </View>


      <View style={styles.optionText}>
        <Text>Escolha uma opção</Text>
      </View>


      <View style={styles.buttonExams}>
        <TouchableOpacity>
          <Text>Resultado</Text>
          <Text>de Exames</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonAgenda}>
        <TouchableOpacity>
          <Text>Agenda de</Text>
          <Text>Consultas</Text>
        </TouchableOpacity>
        </View>


        <View>
          <Image
          source={require('../../assets/Group 16.png')}
          style={{ width: '100%', height: '70%' }}
          resizeMode='contain'/>
        </View>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#FFFFFF'
    },

    topBackground:{
      bottom: '2%',
      paddingRight: '2%'
    },

    helloPhrase:{
      //backgroundColor: '#F8C301',
      fontSize: 50,
      textAlign:'left',
      paddingLeft: '4%',
      bottom: 260,
      fontWeight:'300',
      color: '#000742'
    },

    helloName:{
      //backgroundColor: '#0252B8',
      fontSize: 50,
      textAlign:'left',
      paddingLeft: '4%',
      bottom: 270,
      fontWeight:'bold',
      color: '#000742'
    },

    optionText:{
      backgroundColor: '#F8C301',
      fontSize: 50,
      borderWidth: 1,
    borderColor: 'red'
    },

    buttonExams:{
      backgroundColor: '#0252B8'
    },

    buttonAgenda:{
      backgroundColor: '#F8C301'
    }








})