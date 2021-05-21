package com.toolkit;

import android.provider.Settings;
import android.app.admin.DevicePolicyManager;
import android.content.Intent;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import android.util.Log;


public class ToolkitModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "ToolkitModule";
    }

    ToolkitModule(ReactApplicationContext context) {
        super(context);
    }

    /**
     * Activate the process to change the phone's password
     */
    @ReactMethod
    public void changePassword() {
        Intent intent = new Intent();
        intent.setAction(DevicePolicyManager.ACTION_SET_NEW_PASSWORD);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivityForResult(intent, 1, null);
    }

    /**
     * Get the System Brightness.
     *
     * @return the brightness level of system.
     */
    private int getBrightness() {
        int level = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS));
        Log.d("ToolkitModule", "Brightness level: " + level);
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
        Log.d("ToolkitModule", "Promise: " + promise);
        promise.resolve(getBrightness());
    }

    /**
     * Set the System Brightness
     *
     * @param brightness Set the brightness level between  0 - 255
     */
    @ReactMethod
    private void setBrightness(int brightness) {
        Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS, brightness);
        Log.d("ToolkitModule", "Brightness level: " + brightness);
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
        setBrightness((int) (brightness));
        promise.resolve(1);
    }

    /**
     *  Get the System Brightness mode
     *
     * @return An integer representing the system brightness mode
     */
    private int getBrightnessMode() {
        int mode = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE));
        Log.d("ToolkitModule", "Brightness mode: " + mode);
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
     *
     * @param promise A promise resolving getting system brightness mode
     * @param mode Set the mode for system brightness 0 - Manual, 1 - Automatic
     */
    @ReactMethod
    public void setBrightnessMode(int mode, final Promise promise) {
        setBrightnessMode((int) (mode));
        promise.resolve(1);
    }

    private int getAutoRotation() {
        int mode = Integer.parseInt(Settings.System.getString(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION));
        Log.d("ToolkitModule", "Rotation mode: " + mode);
        return mode;
    };

    @ReactMethod
    public void getAutoRotation(final Promise promise) {
        promise.resolve(getAutoRotation());
    }

    private void setAutoRotation(int mode) {
        if (mode == 0) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION, 0);
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.USER_ROTATION, 0);
        } else if (mode == 1) {
            Settings.System.putInt(getCurrentActivity().getContentResolver(), Settings.System.ACCELEROMETER_ROTATION, 1);
        }
    }

    @ReactMethod
    public void setAutoRotation(int mode, final Promise promise) {
        setAutoRotation((int) (mode));
        promise.resolve(1);
    }

}
