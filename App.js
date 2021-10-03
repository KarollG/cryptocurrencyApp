/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Quotation from './components/Quotation';

const App = () => {

  const [coin, saveCoin] = useState('');
  const [cryptocurrency, saveCryptocurrency] = useState('');
  const [consultAPI, saveConsultAPI] = useState(false);
  const [result, saveResult] = useState({});
  const [charging, saveCharging] = useState(false);

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if(consultAPI){
        // console.log('Listo para cotizar..');
        //consultar la api para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
        const result = await axios.get(url);

        //console.log(result.data.DISPLAY[cryptocurrency][coin]);
        saveCharging(true);

        //ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          saveResult(result.data.DISPLAY[cryptocurrency][coin]);

          saveConsultAPI(false);
          saveCharging(false);
        }, 3000);
      }
      //console.log('Consultar api ha cambiado');
    };
    quoteCryptocurrency();
  }, [consultAPI]);

  //Mostrar el spinner o el resultado
  const componentt = charging ? <ActivityIndicator size="large" color="#5E49E2" /> : <Quotation result={result}/> ;
  return (
    <>
      <ScrollView>
        <Header />

        <Image
          style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.content}>
          <Form
            coin={coin}
            cryptocurrency={cryptocurrency}
            saveCoin={saveCoin}
            saveCryptocurrency={saveCryptocurrency}
            saveConsultAPI={saveConsultAPI}
          />

        </View>
        <View style={{marginTop: 40}}>
          {componentt}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },

  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
