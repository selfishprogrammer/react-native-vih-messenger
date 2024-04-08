import {View, Text} from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

export default function GradiantText(props) {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        style={{
          // backgroundColor: 'black',
          // flex: 1,
          opacity: 5,
          // backfaceVisibility: 'visible',
        }}
        colors={['#0049E6', '#9C15F7', '#FF4CF8']}
        start={{x: 0.5, y: 0}} // Start at the center top
        end={{x: 0.5, y: 1}} // End at the center bottom
      >
        <Text {...props} style={{...props.style, opacity: 0}} />
      </LinearGradient>
    </MaskedView>
  );
}
