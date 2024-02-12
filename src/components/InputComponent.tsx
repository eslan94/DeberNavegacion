import React from 'react'
import { StyleSheet, TextInput } from 'react-native'


interface InputProps{
    name:string,
    onChangeText: (name:string, value:string)=>void;
}

export const InputComponents = ({name, onChangeText}:InputProps) => {
    return (
        <TextInput style={styles.input} keyboardType='default'
                   onChangeText={(value:string)=>onChangeText(name, value)} />
      )
    }
    
    const styles=StyleSheet.create({
        input:{
            backgroundColor:'#0004',
            borderRadius:30,
            textAlign:'center',
            margin:15,
            fontSize:24,
            color:'white'
        }
    })