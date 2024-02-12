import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'



interface ButtonProps{
    title:string;
    onPress:()=>void;
}


export const ButtonComponent = ({title, onPress}:ButtonProps) => {

  return (
    <TouchableOpacity style={styles.buttonContainer}
        onPress={onPress}
        >
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({

    buttonContainer:{
        backgroundColor:'#7370fb',
        paddingVertical:20,
        borderRadius:20,
        width:'50%'
    },

    textButton:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    }
})