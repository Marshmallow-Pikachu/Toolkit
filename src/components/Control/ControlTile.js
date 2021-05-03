import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const ControlTile = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tileContainerStyle}>
      <Text style={styles.tileTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export {ControlTile};
