import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function WelcomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text>Sidekick</Text>
            <Text>Your Best Daily Wingman.</Text>
            <Button
                title='Sign up'
                onPress={() => navigation.navigate("SignUp")}
                color="#ffbf37"
                marginBottom="20"
            />
            <Button
                title='Log in'
                onPress={() => navigation.navigate("Login")}
                color="#46679D"

            />   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#DEDAD7"
    },
});