import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Switch} from 'react-native';
import {width} from '../Dimensions';

const TorchOption = () => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Text style={styles.textStyle}>Flashlight</Text>
      <Switch />
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
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    paddingVertical: 20,
    paddingLeft: 10,
  },
});

export default TorchOption;
