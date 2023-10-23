import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Tabs from '../TabContainer';

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <Button
                title='Sign up'
                onPress={() => navigation.navigate("Tabs")}
            />
        </View>
    )
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
})