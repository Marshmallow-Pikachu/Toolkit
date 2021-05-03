import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ControlGroup, ControlSlider, ControlTile} from '../components/Control';
import Colors from '../Colors';

const SettingScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.secondary, flex: 1}}>
      <ControlGroup title="Connection &amp; Security Settings">
        <ControlTile label="Manage Mobile Data" />
        <ControlTile label="Manage Screen Lock Pin" />
        <ControlTile label="Fingerprint Registration" />
      </ControlGroup>

      <ControlGroup title="Display Settings">
        <ControlTile label="Auto Brightness" />
        <ControlTile label="Auto Rotate" />
        <ControlTile label="Blue Light Filter" />
        <ControlSlider label="Brightness" />
      </ControlGroup>
      
      <ControlGroup title="Useful Tools">
        <ControlTile label="Flashlight" />
        <ControlTile
          label="Calculator"
          onPress={() => navigation.navigate('calculator')}
        />
      </ControlGroup>
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
