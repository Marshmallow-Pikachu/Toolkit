import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {width} from '../Dimensions';
import IntentLauncher from 'react-native-intent-launcher';

const DataOption = () => {
  const openDataSetting = () => {
    IntentLauncher.startActivity({
      action: 'android.settings.DATA_USAGE_SETTINGS',
    });
  };

  return (
    <TouchableOpacity style={styles.containerStyle} onPress={openDataSetting}>
      <Text style={styles.textStyle}>Mobile Data</Text>
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

export default DataOption;
