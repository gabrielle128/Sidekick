import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Tabs from '../TabContainer';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                title='Log in'
                onPress={() => navigation.navigate("Tabs")}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
})