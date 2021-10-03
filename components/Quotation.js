/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quotation = ({result}) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>Precio más alto del día: {' '}
        <Text style={styles.span}>{result.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>Precio más bajo del día {' '}
        <Text style={styles.span}>{result.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>Variación últimas 24 horas: {' '}
        <Text style={styles.span}>{result.CHANGEPCT24HOUR}%</Text>
      </Text>
      <Text style={styles.text}>Última actualización: {' '}
        <Text style={styles.span}>{result.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },

  text: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },

  price: {
    fontSize: 38,
  },

  span: {
    fontFamily: 'Lato-Regular',
  },
});

export default Quotation;