import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import FormButton from '../../components/FormButton';
import Colors from '../../assets/values/colors';

export default function WelcomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/sidekick_logo.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>Sidekick</Text>

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
                color="#ffbf37"
            />
            
            <FormButton
                buttonTitle="Log in"
                onPress={() => navigation.navigate("Login")}
                color="#46679D"
            />
             
        </View>
    );
}

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
        color: '#fffff',
    }
});




// import React from 'react'
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function WelcomeScreen({navigation}){
//     return (
//         <View style={styles.container}>
//             <Text>Sidekick</Text>
//             <Text>Your Best Daily Wingman.</Text>
//             <Button
//                 title='Sign up'
//                 onPress={() => navigation.navigate("SignUp")}
//                 color="#ffbf37"
//                 marginBottom="20"
//             />
//             <Button
//                 title='Log in'
//                 onPress={() => navigation.navigate("Login")}
//                 color="#46679D"

//             />   
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: "center",
//         backgroundColor: "#DEDAD7"
//     },
// });