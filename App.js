import React from 'react';
import Providers from './navigation';
import Routes from './navigation/Routes';
import AuthStack from './navigation/AuthStack';

const App = () => {
  return (
    <Providers />
  );
}

export default App;


// import React from 'react';

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

// import SignUpScreen from './navigation/Authentication/SignUpScreen';
// import LoginScreen from './navigation/Authentication/LoginScreen';
// import WelcomeScreen from './navigation/screens/WelcomeScreen';
// import Tabs from './navigation/TabContainer';


// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions = {{ headerShown: false}} >
//           <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Tabs" component={Tabs} />
//       </Stack.Navigator>   
//     </NavigationContainer>
//   );
// }

// export default App;

// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import WelcomeScreen from './navigation/screens/WelcomeScreen';

// const App = () => {
//   return (
//     <WelcomeScreen />
//   )
// }

// export default App;


// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from './navigation/TabContainer';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }

// export default App;




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
