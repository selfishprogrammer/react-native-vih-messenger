import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SVGProfile2} from '../constants/Images';
import Fonts from '../constants/Fonts';

export default function StoryCard({item, key}) {
  return (
    <TouchableOpacity
      key={key}
      style={{
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 12,
        width: 100,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 5,
        height: 100,
      }}>
      <SvgXml style={{alignSelf: 'center'}} xml={item?.icon} />
      <Text
        // numberOfLines={1}
        style={{
          color: 'black',
          fontFamily: Fonts.bold,
          textAlign: 'center',
          marginTop: 5,
          fontSize: 12,
        }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
}
