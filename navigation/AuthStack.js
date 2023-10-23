import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './Authentication/SignUpScreen';
import LoginScreen from './Authentication/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Tabs from './TabContainer';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false}} >
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>   
  );
}

export default AuthStack;