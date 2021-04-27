import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DataOption from '../components/DataOption';
import FingerprintOption from '../components/FingerprintOption';
import TorchOption from '../components/TorchOption';
import CalcluatorOption from '../components/CalculatorOption';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>Settings</Text>
      <DataOption />
      <FingerprintOption />
      <Text style={styles.titleStyle}>Utilities</Text>
      <TorchOption />
      <CalcluatorOption onPress={() => navigation.navigate('calculator')} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default SettingScreen;
