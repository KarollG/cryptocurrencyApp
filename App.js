import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Quotation from './components/Quotation';

const App = () => {

  const [coin, saveCoin] = useState('');
  const [cryptocurrency, saveCryptocurrency] = useState('');
  const [consultAPI, saveConsultAPI] = useState(false);
  const [result, saveResult] = useState({});

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if(consultAPI){
        // console.log('Listo para cotizar..');
        //consultar la api para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
        const result = await axios.get(url);

        console.log(result.data.DISPLAY[cryptocurrency][coin]);
        saveResult(result.data.DISPLAY[cryptocurrency][coin]);

        saveConsultAPI(false);
      }
      //console.log('Consultar api ha cambiado');
    };
    quoteCryptocurrency();
  }, [consultAPI]);

  return (
    <>
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

        <Quotation
          result={result}
        />
      </View>
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
