import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import img from '../../img';

const ControlTile = ({label, onPress, image, activeState}) => {
  var source;
  if (img[image]) {
    source = img[image];
  } else {
    source = img.unknown;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        activeState
          ? styles.tileContainerActiveStyle
          : styles.tileContainerStyle
      }>
      <Text style={styles.tileTextStyle}>{label}</Text>
      {image ? <Image source={source} width={30} height={30} /> : null}
    </TouchableOpacity>
  );
};

export {ControlTile};
