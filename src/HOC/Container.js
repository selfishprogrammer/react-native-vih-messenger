import {StatusBar, SafeAreaView, Platform, ImageBackground} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import useChannels from '../hooks/useChaneels';

export default function Container({
  statusBarColor,
  backgroundColor,
  statusBarStyle,
  children,
  bgColor,
  noPadding,
  isImage,
}) {
  const channels = useChannels();
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView
          style={{
            flex: 0,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            backgroundColor: !bgColor ? statusBarColor : 'black',
          }}
        />
      ) : null}

      <StatusBar
        animated={true}
        barStyle={statusBarStyle == 'light' ? 'light-content' : 'dark-content'}
        backgroundColor={bgColor ?? statusBarColor}
      />
      {channels && isImage ? (
        <ImageBackground
          source={{
            uri: channels?.Choose_other_image,
          }}
          style={{
            flex: 1,
            resizeMode: 'cover', // or 'stretch'
            justifyContent: 'center',
          }}>
          {children}
        </ImageBackground>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: backgroundColor,
            paddingBottom: noPadding ? 0 : 60,
            padding: 0,
          }}>
          {children}
        </SafeAreaView>
      )}
    </>
  );
}
