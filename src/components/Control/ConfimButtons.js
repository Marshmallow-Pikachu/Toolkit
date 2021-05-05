import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const ConfirmButtons = ({acceptText, denyText, accept, deny}) => {
  return (
    <View style={styles.popupButtonContainerStyle}>
      <TouchableOpacity style={styles.negativeButtonStyle} onPress={deny}>
        <Text style={styles.popupNegativeTextStyle}>{denyText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.positiveButtonStyle} onPress={accept}>
        <Text style={styles.popupPositiveTextStyle}>{acceptText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmButtons;
