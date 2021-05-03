import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './style';

const Button = ({label, onPress, buttonColor}) => {
  const color = StyleSheet.create({
    orange: {backgroundColor: '#fb0'},
    white: {backgroundColor: '#d0d0d0'},
  });

  var buttonStyle = styles.buttonStyle;

  if (buttonColor === 'orange') {
    buttonStyle = StyleSheet.compose(styles.buttonStyle, color.orange);
  } else if (buttonColor === 'white') {
    buttonStyle = StyleSheet.compose(styles.buttonStyle, color.white);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={styles.buttonTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
