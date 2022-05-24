import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Axios from 'axios';
import { useState } from 'react';



let lista = []

export default function GetData(){

    const [user, setUse] = useState('');
    

    function select(){
        lista = []
        Axios.get('http://localhost:3000/pegar')
        .then((response) => response['data'])
          .then(data => {
          for(let i = 0; i < data.length; i++){
            lista.push(data[i]['nome'])
            console.log(lista)
            setUse(lista[i])
          } }
          )

    }




    return(
        <View>
            <Button 
            onPress={select}
            />
            {lista.map(teste => {
                return <Text key={teste} style={styles.txt}>{teste}</Text>
            })}
        </View>
    );

}

const  styles = StyleSheet.create({
    txt:{
        color: '#000',
        fontSize: 25,
    },
})