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
        <StatusBar backgroundColor='#6370EB' barStyle='light-content'/>   
      </View>

      <View style={styles.bgcolor01}>
       <View style={styles.containerFormProntuario}>
            <Text style={styles.title}>Escolha uma opção</Text>
            <Text style={styles.subtitle}>Prontuário</Text>
            <Image style={styles.imageProntuario}
              source={require('../../assets/ProntuarioImage.png')}
            />
        </View>
      </View>

      <View style={styles.bgcolor02}>
        <View style={styles.containerFormAgendadeConsultas}>
          <Text style={styles.titleAgenda}>Agenda de Consultas</Text>
          <Image style={styles.imageCalendario}
            source={require('../../assets/CalendarioImage.png')}
          />
        </View>

      </View>

      <View style={styles.bgcolor03}>
        <View style={styles.containerFormLembretes}>
          <Text style={styles.titleLembretes}>Lembretes</Text>
          <Image style={styles.imageLembretes}
            source={require('../../assets/MemoriaImage.png')}
          />
        </View>
      </View>

     
    
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#156FEB'
  },

  bgcolor01:{flex:1,
  backgroundColor: '#4515EB'},

  bgcolor02:{flex:1,
  backgroundColor: '#156FEB'},

  bgcolor03:{flex:1,
  backgroundColor: '#156FEB'},

  containerFormProntuario:{
    flex:2,
    backgroundColor: '#6370EB',
    borderBottomLeftRadius: 45
  },

  imageProntuario:{
    width: 300,
    height: 200,
    position: 'absolute',
    bottom: -14,
    marginLeft: 90   
  },


  title:{
    paddingTop: '6%',
    paddingLeft: '4%',
    fontWeight: '300',
    color: '#FFFFFF',
    fontSize: 18
  },

  subtitle:{
    paddingTop: '2%',
    paddingLeft: '4%',
    fontWeight: 'bold',
    fontSize: 40,
    color:'#FFFFFF'
  },

  titleAgenda:{
    paddingTop: '6%',
    paddingLeft: '4%',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 40

  },

  imageCalendario:{
    width: 250,
    height: 200,
    position: 'absolute',
    bottom: -14,
    marginLeft: 130
  },

  containerFormAgendadeConsultas:{
    flex:2,
    backgroundColor: '#4515EB',
    borderBottomLeftRadius: 45
  },

  imageLembretes:{
    width: 290,
    height: 200,
    position: 'absolute',
    bottom: 0,
    marginLeft: 80
  },


  titleLembretes:{
      paddingTop: '6%',
      paddingLeft: '4%',
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontSize: 40

  },

  containerFormLembretes:{
    flex:2,
    backgroundColor: '#156FEB'
    
  }

})