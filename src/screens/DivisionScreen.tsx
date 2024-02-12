import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { InputComponents } from '../components/InputComponent';
import { stylesGeneral } from '../theme/NavegacionTheme';


interface Numeros{
    num1:string;
    num2:string;
}


export const DivisionScreen = () => {


  const [numeros, setNumeros] = useState<Numeros>({
    num1:'',
    num2:''
  })

  const [total, setTotal] = useState('');

  const handlerChangeText = (name:string, value:string) =>{
    setNumeros((prevNumeros) => ({
      ...prevNumeros,
      [name]: value
    }));
  }


  const division = () => {

    const numero1 = parseFloat(numeros.num1);
    const numero2 = parseFloat(numeros.num2);

    
    if (numero1 == 0 && numero2 == 0) {
      setTotal('¡Indeterminación!');
    } else if (numero2 == 0){
      setTotal('¡No existe división para cero!');
    }else{
      const resultado = numero1 / numero2;
      setTotal(`El resultado de la división es: ${resultado.toString()}`)
    }

  }


  return (
    <View style={stylesGeneral.container}>
     
      <Text style={stylesGeneral.text}>División</Text>

      <View>
          <Text style={stylesGeneral.textDivision}>Ingrese un número</Text>
            <InputComponents name='num1' onChangeText={handlerChangeText}/>
          <Text style={stylesGeneral.textDivision}>Ingrese un número</Text>
            <InputComponents name='num2' onChangeText={handlerChangeText}/>
      </View> 

      <View style={styles.buttonDividir}>
          <ButtonComponent title='Dividir' onPress={division} />
      </View>

      <View style={styles.resultado}>
          <Text style={stylesGeneral.textDivision}>{total}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  resultado:{
    top:60
  },

  buttonDividir:{
    top:30,
    width:'80%',
    height:80,
    alignItems:'center'
  },


})