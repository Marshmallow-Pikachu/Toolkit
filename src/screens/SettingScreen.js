import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ControlGroup,
  ControlSlider,
  ControlTile,
  DataTile,
  FingerprintTile,
  TorchTile,
} from '../components/Control';
import Colors from '../Colors';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.backgroundStyle}>
      <ControlGroup title="Connection &amp; Security Settings">
        <DataTile />
        <ControlTile label="Manage Screen Lock Pin" disabled />
        <FingerprintTile />
      </ControlGroup>

      <ControlGroup title="Display Settings">
        <ControlTile label="Auto Brightness" image="brightness" />
        <ControlTile label="Auto Rotate" image="rotate" />
        <ControlTile label="Blue Light Filter" image="blueLight" />
        <ControlSlider label="Brightness" />
      </ControlGroup>

      <ControlGroup title="Useful Tools">
        <TorchTile />
        <ControlTile
          label="Calculator"
          image="calculator"
          onPress={() => navigation.navigate('calculator')}
          disabled
        />
      </ControlGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
});

export default SettingScreen;
