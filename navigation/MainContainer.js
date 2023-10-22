import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../assets/values/colors";

import HomeScreen from "./screens/HomeScreen";
import JournalScreen from "./screens/JournalScreen";
import ToDoScreen from "./screens/ToDoScreen";
import WalletScreen from "./screens/WalletScreen";
import { View, Image, Text, StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions = {{ 
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 60,
                    backgroundColor: COLORS.bgcolor

                }
            }}
            // tabBarOptions={{ showLabel: false }}
        
        >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20}}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fffff' : COLORS.grey
                            }}
                        />
                        <Text 
                            style={{color: focused ? '#fffff' : COLORS.grey, fontSize: 12}}>
                            Home
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Journal" component={JournalScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20}}>
                        <Image
                            source={require('../assets/icons/journal.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fffff' : COLORS.grey
                            }}
                        />
                        <Text 
                            style={{color: focused ? '#fffff' : COLORS.grey, fontSize: 12}}>
                            Journal
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="ToDo" component={ToDoScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20}}>
                        <Image
                            source={require('../assets/icons/todo.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fffff' : 'grey'
                            }}
                        />
                        <Text 
                            style={{color: focused ? '#fffff' : 'grey', fontSize: 12}}>
                            To Do
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Wallet" component={WalletScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, paddingBottom: 20}}>
                        <Image
                            source={require('../assets/icons/wallet.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fffff' : 'grey'
                            }}
                        />
                        <Text 
                            style={{color: focused ? '#fffff' : 'grey', fontSize: 12}}>
                            Wallet
                        </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}


export default Tabs;