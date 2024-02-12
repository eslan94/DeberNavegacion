import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { stylesGeneral } from '../theme/NavegacionTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation}:Props) => {

  return (
    <View style={stylesGeneral.container}>
      <View style={stylesGeneral.textImg}>
        <Text style={stylesGeneral.text}>Bienvenido</Text>
        <Image style={stylesGeneral.imagen} source={require('../images/app-movil-a-medida.png')}/>
      </View>
      <ButtonComponent onPress={()=>navigation.navigate('DivisionScreen')} title='Acceder'/>
    </View>
  )
}