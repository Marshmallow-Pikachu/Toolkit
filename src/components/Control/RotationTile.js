import React, {useState, useEffect} from 'react';
import {ControlTile} from './ControlTile';
import Toolkit from '../../Toolkit';

const RotationTile = () => {
  const [rotateMode, setRotateMode] = useState(false);

  const getAutoRotation = async () => {
    const mode = await Toolkit.getAutoRotation();
    return mode;
  };

  const setAutoRotation = async option => {
    var mode = option ? 1 : 0;
    await Toolkit.setAutoRotation(mode).then(() => setRotateMode(mode));
  };

  useEffect(() => {
    getAutoRotation().then(val => {
      setRotateMode(val);
    });
  }, []);

  return (
    <ControlTile
      label="Auto Rotate"
      image="rotate"
      onPress={() => setAutoRotation(!rotateMode)}
      activeState={rotateMode}
    />
  );
};

export {RotationTile};
