import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quotation = ({result}) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <View style={styles.result}>
      <Text style={styles.text}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}> Precio más alto del día
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {

  },

  text: {

  },

  price: {

  },

  span: {

  },
});

export default Quotation;