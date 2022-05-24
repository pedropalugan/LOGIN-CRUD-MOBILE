import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from './style'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >HOME</Text>

      <View style={styles.viewConta}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GetData')}><Text style={styles.txt}>Ver lista</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Login')}><Text style={styles.txt}>Voltar</Text></TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;