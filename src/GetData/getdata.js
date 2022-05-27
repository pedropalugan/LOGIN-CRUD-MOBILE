import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Axios from 'axios';
import { useState } from 'react';



let listaName = []
let listaValue = []

export default function GetData(){

    const [user, setUse] = useState('');
    const [value, setValue] = useState('');
    

    function select(){
        listaName = []
        listaValue =[]
        Axios.get('http://localhost:3000/pegar')
        .then((response) => response['data'])
          .then(data => {
          for(let i = 0; i < data.length; i++){
            listaName.push(data[i]['nome'])
            listaValue.push(data[i]['preco'])
            setUse(listaName[i])
            setValue(listaValue[i])
          } }
          )

    }




    return(
        <View style={styles.mainContent}>
            <TouchableOpacity onPress={select} style={styles.btn}><Text style={styles.btnTxt}>Mostrar Dados</Text></TouchableOpacity>
            <View style={styles.mapContainer}>
                {listaName.map(teste => {
                    return <Text key={teste} style={styles.txt}>{teste}</Text>
                })}
                {listaValue.map(price =>{
                    return <Text key={price} style={styles.txt}>{'R$' + price}</Text>
                })}
            </View>
        </View>
    );

}

const  styles = StyleSheet.create({
    mainContent:{
        backgroundColor: 'black',
        height: '100vh',
        alignItems: 'center',
    },
    txt:{
        color: '#000',
        fontSize: 25,
        fontWeight: 500,
        color: 'white',
    },
    btn:{
        borderRadius: 40,
        backgroundColor: 'cyan',
        width: '75vw',
        height: 75,
        textAlign: 'center',
        marginTop: '15vh',
        marginBottom: '10vh',
    },
    btnTxt:{
        fontWeight: 700,
        color: 'white',
        fontSize: 25,
        marginTop: 17,
    },  
    mapContainer:{
        width: '50vw',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})