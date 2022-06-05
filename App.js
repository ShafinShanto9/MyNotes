import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { StyleSheet } from 'react-native';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';


const firebaseConfig = {
  apiKey: "AIzaSyC0LYGYN_lWkvVtMGmQqq7JvjiEKVIzk3A",
  authDomain: "my-notes-6ac43.firebaseapp.com",
  projectId: "my-notes-6ac43",
  storageBucket: "my-notes-6ac43.appspot.com",
  messagingSenderId: "1010268027703",
  appId: "1:1010268027703:web:c072334efc7414fa09f8b2"
};

const app = initializeApp(firebaseConfig);


const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}

export default function App() {
  const Stack = createNativeStackNavigator();
  const user = false
  return (
    <NavigationContainer theme={AppTheme}>
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
              <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
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
