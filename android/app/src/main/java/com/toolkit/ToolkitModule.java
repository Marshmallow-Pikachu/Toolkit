package com.toolkit;

import android.os.Build;
import android.provider.Settings;
import android.app.admin.DevicePolicyManager;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class ToolkitModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "ToolkitModule";
    }

    ToolkitModule(ReactApplicationContext context) {
        super(context);
    }

    private boolean checkSettingsPermission() {
        boolean hasPermission = true;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            hasPermission = Settings.System.canWrite(getReactApplicationContext());
        }
        return hasPermission;
    }

    @ReactMethod
    public void checkSettingsPermission(final Promise promise) {
        promise.resolve(checkSettingsPermission());
    }

    private boolean requestSettingsPermission() {
        boolean hasPermission = true;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            hasPermission = Settings.System.canWrite(getReactApplicationContext());
            if (!hasPermission) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_WRITE_SETTINGS);
                intent.setData(Uri.parse("package:" + getReactApplicationContext().getPackageName()));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getReactApplicationContext().startActivityForResult(intent, 1, null);
            }
            hasPermission = Settings.System.canWrite(getReactApplicationContext());
        }

        return hasPermission;
    }

    @ReactMethod
    public void requestSettingsPermission(final Promise promise) {
        promise.resolve(requestSettingsPermission());
    }

    /**
     * Activate the process to change the phone's password
     */
    @ReactMethod
    public boolean changePassword() {
        try {
            Intent intent = new Intent();
            intent.setAction(DevicePolicyManager.ACTION_SET_NEW_PASSWORD);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivityForResult(intent, 1, null);
            return true;
        } catch (Exception error) {
            return false;
        }
    }

    @ReactMethod
    public boolean registerFingerprint() {
        try {
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_FINGERPRINT_ENROLL);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivityForResult(intent, 1, null);
            return true;
        } catch (Exception error) {
            return false;
        }
    }

    @ReactMethod
    public boolean manageDataUsage() {
        try {
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_DATA_USAGE_SETTINGS);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivityForResult(intent, 1, null);
            return true;
        } catch (Exception error) {
            return false;
        }
    }

    /**
     * Get the System Brightness.
     *
     * @return the brightness level of system.
     */
    private int getBrightness() {
        int level = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS));
        return level;
    }

    /**
     * Get the System Brightness
     * Callable from the JS context
     *
     * @param promise A promise resolving the brightness level
     */
    @ReactMethod
    public void getBrightness(final Promise promise) {
        promise.resolve(getBrightness());
    }

    /**
     * Set the System Brightness
     *
     * @param brightness Set the brightness level between  0 - 255
     */
    private int setBrightness(int brightness) {
        try {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS, brightness);
            return brightness;
        } catch (Exception error) {
            return -1;
        }
    }

    /**
     * Set the System Brightness
     * Callable from the JS Context
     *
     * @param brightness Set the brightness level between 0 - 255
     * @param promise A promise resolving setting the brightness level
     */
    @ReactMethod
    public void setBrightness(int brightness, final Promise promise) {
        promise.resolve(setBrightness((int) (brightness)));
    }

    /**
     *  Get the System Brightness mode
     *
     * @return An integer representing the system brightness mode
     */
    private int getBrightnessMode() {
        int mode = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE));
        return mode;
    }

    /**
     *  Get the System Brightness mode
     * Callable from JS Context
     *
     * @param promise A promise resolving getting the system brightness mode
     * @return An integer representing the system brightness mode
     */
    @ReactMethod
    public void getBrightnessMode(final Promise promise) {
        promise.resolve(getBrightnessMode());
    }

    /**
     * Set the system brightness mode
     *
     * @param mode Set the mode for system brightness 0 - Manual, 1 - Automatic
     */
    private void setBrightnessMode(int mode) {
        if (mode == 0) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
        } else if (mode == 1) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_AUTOMATIC);
        }
    }

    /**
     * Set the system brightness mode
     *
     * @param promise A promise resolving getting system brightness mode
     * @param mode Set the mode for system brightness 0 - Manual, 1 - Automatic
     */
    @ReactMethod
    public void setBrightnessMode(int mode, final Promise promise) {
        setBrightnessMode((int) (mode));
        promise.resolve(1);
    }

    /**
     * Get the system auto rotation mode
     *
     * @return The value representing the rotation mode 0 - locked rotation, 1 - auto rotation
     */
    private int getAutoRotation() {
        int mode = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION));
        return mode;
    };

    /**
     * Get the system auto rotation mode
     *
     * @param promise A promise resolving getting the auto rotation mode
     */
    @ReactMethod
    public void getAutoRotation(final Promise promise) {
        promise.resolve(getAutoRotation());
    }

    /**
     * Set the auto rotation mode
     *
     * @param mode the mode to set the system's auto rotation 0 - locked rotation, 1 - auto rotation
     */
    private int setAutoRotation(int mode) {
        if (mode == 0) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION, 0);
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.USER_ROTATION, 0);
            return 0;
        } else if (mode == 1) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION, 1);
            return 1;
        } else {
            return -1;
        }
    }

    /**
     * Set the auto rotation mode
     *
     * @param mode the mode to set the system's auto rotation 0 - locked rotation, 1 - auto rotation
     * @param promise A promise to set the auto rotation mode
     */
    @ReactMethod
    public void setAutoRotation(int mode, final Promise promise) {
        promise.resolve(setAutoRotation((int) (mode)));
    }

}
