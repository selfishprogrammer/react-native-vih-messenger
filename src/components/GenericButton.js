import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Gradient from '../HOC/Gradiant';
import Fonts from '../constants/Fonts';
import useChannels from '../hooks/useChaneels';

export default function GenericButton({style, title, onPress}) {
  const channels = useChannels();
  return (
    <TouchableOpacity style={{padding: 0}} onPress={onPress}>
      {channels ? (
        <View
          style={{
            flex: 0,
            padding: 12,
            ...style,
            backgroundColor: channels?.style_primary_color,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: Fonts.regular,
              fontWeight: '400',
            }}>
            {title}
          </Text>
        </View>
      ) : (
        <Gradient
          color={['#FF4CF8', '#0049E6']}
          style={{flex: 0, padding: 12, ...style}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: Fonts.regular,
              fontWeight: '400',
            }}>
            {title}
          </Text>
        </Gradient>
      )}
    </TouchableOpacity>
  );
}
