import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import {ControlTile} from './ControlTile';
import ConfirmButtons from './ConfimButtons';
import FingerprintInfo from './FingerprintInfo';
import styles from './style';
import Toolkit from '../../Toolkit';

const FingerprintTile = () => {
  const [popup, setPopup] = useState(false);

  const registerFingerprint = () => {
    setPopup(false);
    Toolkit.registerFingerprint();
  };

  return (
    <>
      <ControlTile
        label="Fingerprint Registration"
        onPress={() => setPopup(true)}
      />
      <Modal transparent visible={popup}>
        <View style={styles.modalStyle}>
          <View style={styles.popupStyle}>
            <Text style={styles.popupTitleStyle}>Please Take Note</Text>
            <FingerprintInfo />
            <ConfirmButtons
              acceptText="Proceed"
              denyText="Cancel"
              accept={() => registerFingerprint()}
              deny={() => setPopup(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export {FingerprintTile};
