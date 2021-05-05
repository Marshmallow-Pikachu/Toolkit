import React, {useState, useEffect} from 'react';
import Torch from 'react-native-torch';
import {ControlTile} from './ControlTile';

const TorchTile = () => {
  const [isTorchOn, setTorchOn] = useState(false);
  useEffect(() => {
    Torch.switchState(false);
  }, []);

  const switchTorch = () => {
    Torch.switchState(!isTorchOn);
    setTorchOn(!isTorchOn);
  };

  return (
    <ControlTile
      label="Flashlight"
      image="flashlight"
      onPress={() => switchTorch()}
    />
  );
};

export {TorchTile};
