import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Axios from 'axios';
import styles from './style';

function Cadastro({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    function cadastrar(){
      setMessage('')
      Axios.post('http://localhost:3000/register', {
        email: login,
        password: senha,
      }).then((response) =>{
        setLogin('')
        setSenha('')
        setMessage(response.data.msg)
      })
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >C A D A S T R O</Text>

      {/* <TextInput placeholder="Ex: 5" onChangeText={setN1}/> */}
      <TextInput style={styles.input} placeholder=' Usuário' onChangeText={login => setLogin(login)}/>
      <TextInput style={styles.input} placeholder=' Senha' onChangeText={senha => setSenha(senha)} secureTextEntry={true}/>
      <Text style={styles.txtMsg} >{message}</Text>
      <TouchableOpacity style={styles.btn} title="Cadastro" onPress={cadastrar} >
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.viewConta}>
            <Text style={styles.txtConta}>Já tem uma conta?</Text>
            <Text style={styles.txtLink} onPress={() => navigation.navigate('Login')}>Entrar</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Cadastro;