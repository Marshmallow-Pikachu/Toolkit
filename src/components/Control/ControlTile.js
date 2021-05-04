import React, {useState} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import img from '../../img';

const ControlTile = ({label, onPress, image, disabled}) => {
  var source;
  if (img[image]) {
    source = img[image];
  } else {
    source = img.unknown;
  }
  var press = onPress ? onPress : () => undefined;
  const [active, setActive] = useState(false);
  const switchActive = () => {
    setActive(!active);
  };
  if (disabled) {
    var combined = () => {
      press();
    };
  } else {
    var combined = () => {
      press();
      switchActive();
    };
  }

  return (
    <TouchableOpacity
      onPress={combined}
      style={
        active ? styles.tileContainerActiveStyle : styles.tileContainerStyle
      }>
      <Text style={styles.tileTextStyle}>{label}</Text>
      {image ? <Image source={source} width={30} height={30} /> : null}
    </TouchableOpacity>
  );
};

export {ControlTile};
