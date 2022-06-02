import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';

export default function App() {
  const Stack = createNativeStackNavigator();
  const user = false
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ?
            (<>
             <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Edit" component={Edit} />
            </>)
            :
            (<>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />             
            </>)
        }
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
