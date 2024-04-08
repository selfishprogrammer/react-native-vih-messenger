import {View, Text, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function GradiantContent({
  children,
  isPadding,
  style,
  type,
  color,
}) {
  return (
    <LinearGradient
      colors={color}
      start={{x: 0, y: 0.5}} // Vertical gradient from top to bottom
      end={{x: 0.8, y: 0.5}}
      style={{
        // borderRadius: 9,
        padding: isPadding ? 20 : 0,
        zIndex: 99999,
        // flex: 1,
        ...style,
        backgroundColor: '#fff',
      }}>
      {children}
    </LinearGradient>
  );
}
