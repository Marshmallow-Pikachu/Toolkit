# Toolkit
## Settings Control App

This app can control some of the settings of a Samsung phone. The apk for the app can be found under this [./android/app/release](./android/app/release).

## Documentation
**UI Elements**
---
Found under [./src/components](./src/components).
| Control |   |
|--|--|
|BrightnessModeTile| A tile for controlling the brightness mode setting  |
|BrightnessSlider  | A slider for controlling the brightness level       |
|ConfirmButtons    | Base component for accept and deny buttons          |
|ControlGroup      | For grouping the components on the screen           |
|ControlSlider     | Base component for slider                           |
|ControlTile       | Base component for tile                             |
|DataTile          | A tile for sending user to manage data usage screen |
|FingerprintInfo   | The text for fingerprint enrollment warnings        |
|FingerprintTile   | A tile for starting the fingerprint enrollment      |
|PasswordTile      | A tile for sending user to manage screen lock screen|
|PermissionsInfo   | A Popup to ask for permissions required for app     |
|RotationTile      | A tile for controlling the rotation mode            |
|TorchTile         | A tile for controlling flashlight                   |
|**Calculator**    |                                                     |
|Button    | Base Buttons for the calculator                             |
|ButtonRow | A group for containing buttons in calculator                |
|Calculator| Main component for the calculator                           |
|Display   | A Display for the input and output of calculator            |

**Toolkit Library**
---
The library containing the additional react native functions can be found under [./android/app/src/main/java/com/toolkit/ToolkitModule](./android/app/src/main/java/com/toolkit/ToolkitModule).
| Function Name | Description |
|--|--|
| checkSettingsPermission  | Check if the app has the write settings permission|
| requestSettingsPermission| Request for the write settings permission if the app has not been granted it|
| changePassword           | Send an intent to bring user to Manage Screen Lock Pin Screen|
| registerFingerprint      | Send an intent to begin Fingerprint Enrollment |
|manageDataUsage           | Send an intent to bring user to manage Data Usage screen |
|getAutoRotationMode       | Get the current rotation mode of the system |
|setAutoRotationMode       | Set the rotation mode of the system |
|getBrightness             | Get the current Brightness level of the system |
|setBrightness             | Set the brightness level of the system |
|getBrightnessMode         | Get the brightness mode of the system |
|setBrightnessMode         | Set the brightness mode of the system |

## Other Imports Used
[react-native-torch](https://www.npmjs.com/package/react-native-torch)
For asking permission and controlling the flash of the phone
