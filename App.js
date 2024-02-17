import { StatusBar, TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function App() {
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
          source={require('../loginSaude/assets/DoctorImage.png')}
          style={styles.imageVector}
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.whiteContainer}>
        <View style={styles.textoEmail}>
          <Text>E-mail</Text>
        </View>

        <View>
          <TextInput style={styles.botaoLogin}
          placeholder='Digite seu e-mail' />
        </View>

        <View style={styles.textoSenha}>
          <Text>Senha</Text>
        </View>

        <View>
          <TextInput style={styles.botaoSenha} 
          placeholder='Digite sua senha'
          secureTextEntry={true}/>
        </View>

        <View>
          <TouchableOpacity style={styles.botaoEntrar}>
            <Text style={{ alignSelf: 'center', marginTop: 12, color: '#FFFFFF', fontWeight: '800' }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      <StatusBar style="auto" />
    </View>
  );
}

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

