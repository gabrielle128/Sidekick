import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import FormInput from '../../components/FormInput';
import SocialButton from '../../components/SocialButton';
import FormButton from '../../components/FormButton';
import Colors from '../../assets/values/colors';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/sidekick_logo.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>Sidekick</Text>

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Log in"
                onPress={() => navigation.navigate("Tabs")}
            />

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BGCOLOR,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: Colors.BLACK,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.GREY,
    }
})