import React, {useState, useEffect} from 'react';
import {ControlTile} from './ControlTile';
import Toolkit from '../../Toolkit';

const BrightnessModeTile = () => {
  const [brightMode, setBrightMode] = useState(false);

  const getBrightnessMode = async () => {
    const mode = await Toolkit.getBrightnessMode();
    return mode;
  };

  const setBrightnessMode = async option => {
    var mode = option ? 1 : 0;
    await Toolkit.setBrightnessMode(mode).then(() => setBrightMode(mode));
  };

  useEffect(() => {
    getBrightnessMode().then(val => {
      setBrightMode(val);
    });
  }, []);

  return (
    <ControlTile
      label="Auto Brightness"
      image="brightness"
      onPress={() => setBrightnessMode(!brightMode)}
      activeState={brightMode}
    />
  );
};

export {BrightnessModeTile};
