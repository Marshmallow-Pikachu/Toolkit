import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const ControlGroup = ({title, children}) => {
  return (
    <View style={styles.groupContainerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.groupStyle}>{children.slice(0, 3)}</View>
      <View style={styles.groupStyle}>{children.slice(3)}</View>
    </View>
  );
};

export {ControlGroup};
