import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Slider from '@react-native-community/slider';

const ControlSlider = ({label}) => {
  return (
    <View style={styles.sliderContainerStyle}>
      <Text style={styles.sliderTextStyle}>{label}</Text>
      <Slider
        style={styles.sliderStyle}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export {ControlSlider};
