import React from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './style';

const Display = ({text}) => {
  return (
    <ScrollView style={styles.displayStyle}>
      <Text style={styles.displayTextStyle}>{text}</Text>
    </ScrollView>
  );
};

export default Display;
