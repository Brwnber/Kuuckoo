import React, { Component } from 'react';
import { PermissionsAndroid, Button, Text, Alert, StyleSheet, View } from "react-natve";

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Kuuckoo Camera Permission",
                message: "Kuuckoo needs your permission to access your camera to use QR codes",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            });
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log("Permission Granted");
            } else { console.log("Permission Denied"); }
    } catch (err) {
        console.warn(err)
    }
};