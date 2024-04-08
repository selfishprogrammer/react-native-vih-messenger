import {StatusBar, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Container({
  statusBarColor,
  backgroundColor,
  statusBarStyle,
  children,
  bgColor,
  noPadding,
}) {
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          paddingBottom: noPadding ? 0 : 60,
          padding: 0,
        }}>
        {children}
      </SafeAreaView>
    </>
  );
}
