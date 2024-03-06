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
import { useNavigation } from '@react-navigation/native';


export default function Dashboard() {
  const navigation = useNavigation();
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

      


      <View style={styles.containerButtons}>
        <Text style={styles.optionText}>Escolha uma opção</Text>
      </View>








      <View>
          
      <View style={styles.buttonExams}>
        <TouchableOpacity onPress={() => navigation.navigate('ResultadoDeExames')}>
          <Text style={styles.buttonTextExams}>Resultado de Exames</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonAgenda}>
        <TouchableOpacity>
          <Text style={styles.buttonTextAgenda}>Agenda de Consultas</Text>
        </TouchableOpacity>
        </View>




      </View>












        <View style={styles.bottoBackground}>
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
      paddingLeft: '10%',
      bottom: 260,
      fontWeight:'300',
      color: '#000742'
    },

    helloName:{
      //backgroundColor: '#0252B8',
      fontSize: 50,
      textAlign:'left',
      paddingLeft: '10%',
      bottom: 270,
      fontWeight:'bold',
      color: '#000742'
    },

    optionText:{
      //backgroundColor: '#F8C301',
      fontSize: 25,
      textAlign:'left',
      paddingLeft: '10%',
      bottom: 260,
      fontWeight:'200',
      color: '#000742'
    },

    buttonExams:{
      backgroundColor: '#000742',
      width: 300,
      height: 120,
      alignSelf: 'center',
      bottom: 240,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    },

    buttonTextExams:{
      color: 'white',
      paddingLeft: '5%',
      paddingTop: '2%',
      fontSize: 35
      
    },

    buttonAgenda:{
      backgroundColor: '#000742',
      width: 300,
      height: 120,
      alignSelf: 'center',
      bottom: 200,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    },

    buttonTextAgenda:{
      color: 'white',
      paddingLeft: '5%',
      paddingTop: '2%',
      fontSize: 35,
      fontWeight: 'bold'
    },

    bottoBackground:{
      bottom:280
    }









})