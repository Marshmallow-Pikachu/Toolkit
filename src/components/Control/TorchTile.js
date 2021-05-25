import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, ToastAndroid} from 'react-native';
import Torch from 'react-native-torch';
import {ControlTile} from './ControlTile';

const TorchTile = () => {
  const [isTorchOn, setTorchOn] = useState(false);
  useEffect(() => {
    Torch.switchState(false);
  }, []);

  const requestCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Toolkit App Camera Permission',
          message:
            'Toolkit App needs access to your camera ' +
            'to activate your flashlight.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(granted);
      return granted;
    } catch (err) {
      ToastAndroid.show(
        'Something went wrong, please try again later',
        ToastAndroid.SHORT,
      );
      return false;
    }
  };

  const switchTorch = async () => {
    await requestCamera().then(granted => {
      if (granted) {
        Torch.switchState(!isTorchOn);
        setTorchOn(!isTorchOn);
      }
    });
  };

  return (
    <ControlTile
      label="Flashlight"
      image="flashlight"
      onPress={() => switchTorch()}
      activeState={isTorchOn}
    />
  );
};

export {TorchTile};
