import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import  Axios  from 'axios';

import styles from './style.js'


function Login({ navigation }) {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");



    function validacao(){
        Axios.post('http://localhost:3001/login', {
            email: login,
            password: senha,
        }).then((response) => {
            if(response.data.msg === 1){
                navigation.navigate('Home')
                setMessage('')
                setSenha('')
                setLogin('')
            }
            else{
                setMessage("Senha ou email incorreto")
                setLogin('')
                setSenha('')
            }
        })

    }
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="cyan" barStyle="dark-content"/>
            <Text style={styles.title} >L O G I N</Text>

            <TextInput style={styles.input} onChangeText={login => setLogin(login)} value={login} placeholder=' Usuário'/>

            <TextInput style={styles.input} onChangeText={senha => setSenha(senha)} value={senha} placeholder='Senha' secureTextEntry={true}/>

            <Text style={styles.txtMsg} >{message}</Text>

            <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => validacao()}>
                <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.viewConta}>
                <Text style={styles.txtConta}>Não tem uma conta?</Text>
                <Text style={styles.txtLink} onPress={() => navigation.navigate('Cadastro')}>Criar</Text>
            </View>
        </View>
    );
}

export default Login;