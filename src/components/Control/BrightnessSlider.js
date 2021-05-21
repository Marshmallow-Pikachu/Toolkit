import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ToolkitModule from '../../Toolkit';
import {ControlSlider} from './ControlSlider';

const BrightnessSlider = () => {
  const [level, setLevel] = useState(0);
  const [change, setChange] = useState(false);
  var listener;

  const getBrightness = async () => {
    var brightness = await ToolkitModule.getBrightness();
    return brightness;
  };

  const setBrightness = async val => {
    val = Math.round(val);
    await ToolkitModule.setBrightness(val).then(res => {
      setLevel(res);
    });
  };

  const brightnessListener = () => {
    return setInterval(() => {
      if (!change) {
        getBrightness().then(val => {
          setLevel(val);
        });
      }
    }, 100);
  };

  useFocusEffect(() => {
    listener = brightnessListener();
    return () => clearInterval(listener);
  });

  return (
    <ControlSlider
      label="Brightness"
      minimum={0}
      maximum={255}
      value={level}
      onValueChange={setBrightness}
      onSlidingStart={() => setChange(true)}
      onSlidingComplete={() => setChange(false)}
    />
  );
};

export {BrightnessSlider};
