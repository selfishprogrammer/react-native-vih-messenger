import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SVGCart} from '../constants/Images';
import Fonts from '../constants/Fonts';

export default function CardHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <SvgXml xml={SVGCart} />
        <Text
          style={{
            color: 'rgba(30, 30, 30, 1)',
            fontSize: 12,
            fontFamily: Fonts.regular,
            marginLeft: 7,
          }}>
          Delivered on 16.07.2022, 20:53
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          borderWidth: 1,
          borderColor: 'rgba(242, 243, 244, 1)',
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 10,
            color: 'rgba(108, 84, 230, 1)',
            fontFamily: Fonts.medium,
          }}>
          M2Z4-VVY2
        </Text>
      </View>
    </View>
  );
}
