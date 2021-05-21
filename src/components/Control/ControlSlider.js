import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Slider from '@react-native-community/slider';

const ControlSlider = ({
  label,
  minimum,
  maximum,
  value,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
}) => {
  return (
    <View style={styles.sliderContainerStyle}>
      <Text style={styles.sliderTextStyle}>{label}</Text>
      <Slider
        style={styles.sliderStyle}
        minimumValue={minimum}
        maximumValue={maximum}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onSlidingStart={onSlidingStart ? onSlidingStart : () => null}
        onSlidingComplete={onSlidingComplete ? onSlidingComplete : () => null}
      />
    </View>
  );
};

export {ControlSlider};
