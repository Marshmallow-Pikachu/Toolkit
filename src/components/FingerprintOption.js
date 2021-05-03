import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {width} from '../Dimensions';

const FingerprintOption = () => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Text style={styles.textStyle}>Register Fingerprint</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    backgroundColor: '#bbf',
    width: width * 0.8,
    marginVertical: width * 0.01,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 25,
    paddingVertical: 20,
    paddingLeft: 10,
  },
});

export default FingerprintOption;
