import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ControlGroup,
  ControlTile,
  DataTile,
  FingerprintTile,
  TorchTile,
  BrightnessSlider,
  BrightnessModeTile,
  RotationTile,
  PasswordTile,
  PermisssionsInfo,
} from '../components/Control';
import Colors from '../Colors';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.backgroundStyle}>
      <PermisssionsInfo />
      <ControlGroup title="Connection &amp; Security Settings">
        <DataTile />
        <PasswordTile />
        <FingerprintTile />
      </ControlGroup>

      <ControlGroup title="Display Settings">
        <BrightnessModeTile />
        <RotationTile />
        <View />
        <BrightnessSlider />
      </ControlGroup>

      <ControlGroup title="Useful Tools">
        <TorchTile />
        <ControlTile
          label="Calculator"
          image="calculator"
          onPress={() => navigation.navigate('calculator')}
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
