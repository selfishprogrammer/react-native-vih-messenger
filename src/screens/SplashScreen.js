import {View, Text, Image} from 'react-native';
import React from 'react';
import {Logo, SVGSplash} from '../constants/Images';
import {WebView} from 'react-native-webview';

export default function SplashScreen() {
  return (
    <WebView
      source={{
        uri: 'https://65f3d16d0688d40cf9fcac12--fluffy-concha-9b12d1.netlify.app/',
      }}
      style={{flex: 1}}
    />
  );
}
