import React from 'react';
import {ControlTile} from './ControlTile';
import Toolkit from '../../Toolkit';

const PasswordTile = () => {
  return (
    <ControlTile
      label="Manage Screen Lock Pin"
      onPress={() => Toolkit.changePassword()}
    />
  );
};

export {PasswordTile};