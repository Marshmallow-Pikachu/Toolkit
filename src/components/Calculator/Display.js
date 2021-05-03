import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Display = ({text}) => {
  return (
    <View style={styles.displayStyle}>
      <Text style={styles.displayTextStyle}>{text}</Text>
    </View>
  );
};

export default Display;
