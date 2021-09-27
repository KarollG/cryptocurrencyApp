/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({coin, cryptocurrency, saveCoin, saveCryptocurrency, saveConsultAPI}) => {

  const [cryptocurrencies, saveCryptocurrencies] = useState([]);

  //Almacena las selecciones del usuario
  const getCoin = coin => {
    saveCoin(coin);
  };
  const getCryptocurrency = crypto => {
    saveCryptocurrency(crypto);
  };
  const quotePrice = () => {
    if(coin.trim() === '' || cryptocurrency.trim() === ''){
      showAlert();
      return;
    }

    //console.log('Cotizando');

    //cambiar el state de consultar api
    saveConsultAPI(true);
  };

  const showAlert = () => {
    Alert.alert(
      'Error ...',
      'Ambos campos son obligatorios',
      [
        {text: 'OK'}
      ]
      );
  }

  useEffect(() => {
    const consultAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      saveCryptocurrencies(result.data.Data);
    };
    consultAPI();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={coin}
        onValueChange={coin => getCoin(coin)}
        itemStyle={{ height:120}}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Peso Colombiano" value="COP" />
      </Picker>
      <Text style={styles.label}>Criptomonedas</Text>
      <Picker
        selectedValue={cryptocurrency}
        onValueChange={crypto => getCryptocurrency(crypto)}
        itemStyle={{ height:120}}
      >
        <Picker.Item label="- Seleccione -" value="" />
        {cryptocurrencies.map(crypto => (
          <Picker.Item key = {crypto.CoinInfo.Id} label= {crypto.CoinInfo.FullName} value = {crypto.CoinInfo.Name} />

        ) )}
      </Picker>

      <TouchableHighlight
        style={styles.btnQuote}
        onPress={ ()=> quotePrice()}
      >
        <Text style={styles.textQuote}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },

  btnQuote: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
  },

  textQuote: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Form;