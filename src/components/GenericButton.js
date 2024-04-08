import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Gradient from '../HOC/Gradiant';
import Fonts from '../constants/Fonts';

export default function GenericButton({style, title, onPress}) {
  return (
    <TouchableOpacity style={{padding: 0}} onPress={onPress}>
      <Gradient
        color={['#FF4CF8', '#0049E6']}
        style={{flex: 0, padding: 12, ...style}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: Fonts.regular,
          }}>
          {title}
        </Text>
      </Gradient>
    </TouchableOpacity>
  );
}
