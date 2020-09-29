import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,  View, TextInput, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from 'react-native';

export default function App() {

  const [idade, codidade] = React.useState();
  const [peso, codPeso] = React.useState(0.00);
  const [altura, codAltura] = React.useState(0.00);
  const [imc, codImc] = React.useState(0.00);

  function calcIMC(peso, altura) {
    var R = peso / (altura * altura)
    codImc(R)
    setText(R)}

  function setText(R) {
    const T = "";
    if  (R < 17){
      alert("Cuidado! Você está muito abaixo do peso.")
    }
    else if (R >= 17 && R < 18.49){
      alert("Atenção! Você está abaixo do peso.")
    }
    else if (R >= 18.49 && R < 24.99){
      alert("Você está saldável.")
    }
    else if (R >= 24.99 && R < 29.99){
      alert("Atenção! Você está acima do peso.")
    }
    else if (R >= 29.99 && R < 34.99){
      alert("Atenção! Você está com obesidade 1.")
    }
    else if (R >= 34.99 && R < 39.99){
      alert("Cuidado! Você está com obesidade 2.")
    }
    else if (R >= 39.99){
      alert("Perigo! Você está com obesidade 3(morbida).")
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.views1, styles.child1,]}>
      <Text style={[styles.Text]}><Icon name="fitness-center" size={30}></Icon> Calculadora de IMC <Icon name="fitness-center" size={30}></Icon></Text>
      </View>

      <Text style={[styles.Textmini]}> <Icon name="pregnant-woman" size={30}></Icon> Digite seu peso em Kg: <Icon name="pregnant-woman" size={30}></Icon></Text>
      <TextInput
      placeholder="0"
       onChangeText={valor => codPeso(valor)}
       value={peso} 
       style={[styles.Textimput]}></TextInput>

      <Text style={[styles.Textmini]}><Icon name="arrow-upward" size={30}></Icon> Digite sua altura em metros: <Icon name="arrow-upward" size={30}></Icon></Text>
      <TextInput 
      placeholder="0"
      onChangeText={(valor) => codAltura(valor)}
      value={altura}
      style={[styles.Textimput]}></TextInput>

      <Text  style={[styles.Textmini]}><Icon name="child-care" size={30}></Icon>Selecione sua idade: <Icon name="child-care" size={30}></Icon></Text>
      <Picker 
          selectedValue={idade}
          style={[styles.Textidade]}
          onValueChange={(itemValue) => codidade({ itemValue })}>
          <Picker.Item label="Criança" value="crianca" />
          <Picker.Item label="Adulto" value="adulto" />
          <Picker.Item label="Idoso" value="idoso" />
      </Picker>

      
      <TouchableOpacity style={[styles.views3, styles.child3,]}
          onPress={() => calcIMC(peso, altura)}>
          <Text style={[styles.Textmini]}>Calcular</Text>
        </TouchableOpacity>

      <View style={[styles.views4, styles.child3,]}>
      <Text style={[styles.Textmini]}> IMC: {imc.toFixed(2)} </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',

  },

  Text:{
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Textmini:{
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Textimput:{
    backgroundColor: '#ffff',
    color: '#000',
    fontSize: 15,
  },
  Textidade:{
    fontSize: 15,
    width: '50%',
    color: '#fff'
  },

  views1:{
    width: 355,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  views2:{
    width: 355,
    height: 25,
  },
  views3:{
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  views4:{
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  child1: {
    backgroundColor: '#0022d4',
  },

  child3: {
    backgroundColor: '#0022d4',
    borderRadius: 5
  },


});
