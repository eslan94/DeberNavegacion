import { StyleSheet, Text } from 'react-native';

export const stylesGeneral = StyleSheet.create({

    container:{
        backgroundColor:'aquamarine',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'black',
        bottom:30,
        textAlign:'center'
    },

    textDivision:{
         fontSize:25,
         color:'black',
         textAlign:'center'
    },

    imagen:{
        width:275,
        height:275,
        borderRadius:20,
    },

    textImg:{
        top:-50,
        justifyContent:'center',
        alignItems:'center',       
    }
})