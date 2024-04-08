import {View, Text, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Gradient({
  children,
  isPadding,
  style,
  type,
  color,
  isBlue,
}) {
  return (
    <LinearGradient
      colors={color}
      start={{x: 0.5, y: 0}} // Vertical gradient from top to bottom
      end={{x: 0.5, y: isBlue ? 0.5 : 1}}
      style={{
        // borderRadius: 9,
        padding: isPadding ? 20 : 0,
        zIndex: 99999,
        flex: 1,
        ...style,
      }}>
      {children}
    </LinearGradient>
  );
}
