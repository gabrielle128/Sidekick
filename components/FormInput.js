import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Colors from '../assets/values/colors';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}> 
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#808080" />
            </View>
            <TextInput 
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="#808080"
                {...rest}
            />
        </View>
    );
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: Colors.BLACK,
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.BGCOLORCV
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: "#ccc",
        borderRightWidth: 1,
        width: 50
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: Colors.GREY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
})