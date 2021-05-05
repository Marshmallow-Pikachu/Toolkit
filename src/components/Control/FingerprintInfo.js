import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const FingerprintInfo = () => {
  return (
    <>
      <View style={styles.popupTextContainerStyle}>
        <Text style={styles.popupIndexStyle}>1. </Text>
        <Text style={styles.popupTextStyle}>
          When registering new fingerprints, other apps may require you to
          re-enter with your PIN first.
        </Text>
      </View>
      <View style={styles.popupTextContainerStyle}>
        <Text style={styles.popupIndexStyle}>2. </Text>
        <Text style={styles.popupTextStyle}>
          A maximum of 4 fingerprints can be registered. Afterwards, the
          registration process will not activate.
        </Text>
      </View>
      <View style={styles.popupTextContainerStyle}>
        <Text style={styles.popupIndexStyle}>3. </Text>
        <Text style={styles.popupTextStyle}>
          Please contact your admin if you need to clear the stored
          fingerprints.
        </Text>
      </View>
    </>
  );
};

export default FingerprintInfo;