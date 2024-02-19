import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';


export default function Login() {
  return(
    <View style={styles.container}>
      

      <View style={styles.containerForm}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>

      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/DoctorImage.png')}
          style={{ width: '100%', height: 380 }}
          resizeMode='contain'
          />
      </View>

      <View style={styles.containerAcess}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        
      </View>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#6371EB'
  },

  containerForm:{
    flex:1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerLogo:{
    flex:3,
    backgroundColor: 'red' 
  },

  containerAcess:{
    flex:2,
    backgroundColor: 'white',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  },

  subtitle:{
    fontSize:18,
    color: 'white'
  }
})