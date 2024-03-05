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

export default function Login() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      

      <View style={styles.containerForm}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation={''}
          source={require('../../assets/Group 15.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode='cover'/>
          
      </View>

      <Animatable.View delay={600} animation={''} style={styles.containerAcess}>
      
        <Text style={styles.emailTitle}>E-mail</Text>

          <TextInput style={styles.emailInput}
          placeholder='Digite seu e-mail'>
          </TextInput>

        <Text style={styles.pwdTitle}>Senha</Text>

          <TextInput style={styles.pwdInput}
            placeholder='Digite sua senha'
            secureTextEntry={true}>

          </TextInput>

          <TouchableOpacity 
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={{color: '#FFFFFF', fontWeight: '500', textAlign: 'center', marginTop: 10}}>Entrar</Text>
          </TouchableOpacity>
       
      </Animatable.View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#000742'
  },

  containerForm:{
    flex:1,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerLogo:{
    flex:3,
    //backgroundColor: 'red' 
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
    paddingTop: '0%',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },

  subtitle:{
    fontSize:18,
    fontWeight: '300',
    color: 'white'
  },

  emailTitle:{
    alignSelf: 'baseline',
    paddingTop: '4%',
    paddingLeft: '12%',
    fontWeight: '300'
  },

  emailInput:{
    marginTop: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000742',
    width: 254,
    height: 40,
    borderRadius: 49,
    textAlign: 'center',
    color: '#000742'
  },

  pwdTitle:{
    alignSelf:'baseline',
    paddingTop: '4%',
    paddingLeft: '12%',
    fontWeight: '300'
  },

  pwdInput:{
    marginTop: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000742',
    width: 254,
    height: 40,
    borderRadius: 49,
    textAlign: 'center',
    color: '#000742'
  },

  buttonLogin:{
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#000742',
    borderWidth: 1,
    width: 254,
    height: 40,
    borderRadius: 49,
    borderColor: '#000742'
  }

})