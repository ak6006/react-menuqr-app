
import React, { Component, createRef } from 'react';
import { WebView  } from 'react-native-webview';

export default function LoginWeb() {
    return (
        <WebView
            source={{ uri: "https://almenuqr.com/dashBoard" }}
            geolocationEnabled={true}
        />
    )	
}