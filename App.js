import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View } from 'react-native';
import Login from './src/Login';
import Cadastro from './src/Cadastro'
import Home from './src/Home'
import GetData from './src/GetData/getdata';

const Stack = createNativeStackNavigator();     

function App(){
  return(
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetData">
          <Stack.Screen name="Login" component={Login} options={{  title: 'Login'}} />
          <Stack.Screen name ="Cadastro" component={Cadastro} options={{ title: 'Cadastro'}} />
          <Stack.Screen name ="Home" component={Home} options={{ title: 'Home'}} />
          <Stack.Screen name="GetData" component={GetData} options={{title:'Pegar Dado'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;