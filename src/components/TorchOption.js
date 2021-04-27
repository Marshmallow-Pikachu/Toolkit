import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {width} from '../Dimensions';

const TorchOption = () => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Text style={styles.textStyle}>Flashlight</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    backgroundColor: '#bbf',
    width: width * 0.8,
    marginVertical: width * 0.02,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 25,
    paddingVertical: 20,
    paddingLeft: 10,
  },
});

export default TorchOption;
