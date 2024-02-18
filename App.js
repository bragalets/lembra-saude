import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import InputField from './scr/components/InputField';
import ActionButton from './scr/components/ActionButton';
import { StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6371EB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoContainer: {
      flex: 1,
      alignItems: 'center',
      marginTop: 40,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    imageVector: {
      width: 300,
      height: 300,
      bottom: 280,
    },
    whiteContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTopRightRadius: 28,
      borderTopLeftRadius: 28,
      height: 300,
      backgroundColor: 'white',
    },
    textoEmail: {
      alignItems: 'start',
      marginTop: 16,
      marginLeft: 60,
    },
    botaoLogin: {
      marginTop: 10,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#6371EB',
      width: 254,
      height: 40,
      borderRadius: 49,
      textAlign: 'center',
    },
    textoSenha: {
      alignItems: 'start',
      marginTop: 16,
      marginLeft: 60,
    },
    botaoSenha: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#6371EB',
      alignSelf: 'center',
      width: 254,
      height: 40,
      borderRadius: 49,
      textAlign: 'center',
    },
    botaoEntrar: {
      marginTop: 30,
      alignSelf: 'center',
      borderWidth: 1,
      backgroundColor: '#4515EB',
      width: 254,
      height: 40,
      borderRadius: 49,
    },
    textoOla: {
      bottom: 20,
      fontSize: 50,
      color: '#FFFFFF',
    },
    textoLogin: {
      bottom: 18,
      fontSize: 18,
      fontWeight: '300',
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textoContainer}>
        <Text style={styles.textoOla}>Olá!</Text>
        <Text style={styles.textoLogin}>Faça login para continuar</Text>
      </View>

      <View style={styles.imageContainer}>
        <Animatable.Image
          delay={600}
          animation="flipInY"
          source={require('../lembra-saude/assets/DoctorImage.png')}
          style={styles.imageVector}
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.whiteContainer}>
        <InputField
          label="E-mail"
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
        />

        <InputField
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <ActionButton label="Entrar" onPress={handleLogin} />
      </Animatable.View>

      <StatusBar style="auto" />
    </View>
  );
}
