import React from 'react';
import {ControlTile} from './ControlTile';
import Toolkit from '../../Toolkit';

const DataTile = () => {
  return (
    <ControlTile
      label="Manage Mobile Data"
      onPress={() => Toolkit.manageDataUsage()}
    />
  );
};

export {DataTile};
