import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quotation = ({result}) => {
  if(Object.keys(result).length === 0 ) return null;
  return (
    <Text>El precios{result.PRICE}</Text>
    );
};

export default Quotation;