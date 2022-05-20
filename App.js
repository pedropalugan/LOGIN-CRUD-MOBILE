import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './src/Login';
import Cadastro from './src/Cadastro'
import Home from './src/Home'
import GetData from './src/GetData/getdata';

const Stack = createNativeStackNavigator();     

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{  title: 'Login'}} />
        <Stack.Screen name ="Cadastro" component={Cadastro} options={{ title: 'Cadastro'}} />
        <Stack.Screen name ="Home" component={Home} options={{ title: 'Home'}} />
        <Stack.Screen name="GetData" component={GetData} options={{title:'Pegar Dado'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;