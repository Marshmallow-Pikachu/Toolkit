import React from 'react';
import {View} from 'react-native';
import styles from './style';

const ButtonRow = ({children}) => {
  return <View style={styles.buttonRowStyle}>{children}</View>;
};

export default ButtonRow;