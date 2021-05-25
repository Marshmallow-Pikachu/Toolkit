import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './style';
import Toolkit from '../../Toolkit';

const PermisssionsInfo = () => {
  const [popup, setPopUp] = useState(false);

  const checkPerm = async () => {
    const granted = await Toolkit.checkSettingsPermission();
    return granted;
  };

  const requestPerm = async () => {
    await Toolkit.requestSettingsPermission().then(() => {
      checkPerm().then(granted => {
        setPopUp(!granted);
      });
    });
  };

  useEffect(() => {
    checkPerm().then(granted => {
      setPopUp(!granted);
    });
  });

  return (
    <>
      <Modal transparent visible={popup}>
        <View style={styles.modalStyle}>
          <View style={styles.popupStyle}>
            <Text style={styles.popupTitleStyle}>
              Write Settings Permission
            </Text>
            <Text style={styles.popupTextStyle}>
              Toolkit App requires the write settings permission in order to
              control and manage some settings.
            </Text>
            <View style={styles.popupButtonContainerStyle}>
              <TouchableOpacity
                style={styles.positiveButtonStyle}
                onPress={() => requestPerm()}>
                <Text style={styles.popupPositiveTextStyle}>
                  Go to Settings
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export {PermisssionsInfo};
