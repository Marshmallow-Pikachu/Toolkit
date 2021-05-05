import React from 'react';
import {ControlTile} from './ControlTile';
import IntentLauncher from 'react-native-intent-launcher';

const DataTile = () => {
  return (
    <ControlTile
      label="Manage Mobile Data"
      onPress={() =>
        IntentLauncher.startActivity({
          action: 'android.settings.DATA_USAGE_SETTINGS',
        })
      }
      disabled
    />
  );
};

export {DataTile};
