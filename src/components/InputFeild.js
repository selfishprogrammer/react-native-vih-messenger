import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Fonts from '../constants/Fonts';

export default function InputFeild({
  onChange,
  label,
  value,
  palceholder,
  style,
}) {
  return (
    <View style={{marginVertical: 5, ...style}}>
      <Text style={{fontFamily: Fonts.italicMedium, color: 'black', margin: 8}}>
        {label}
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(108, 84, 230, 0.16)',
          padding: 2,
        }}>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: 'white',
            borderWidth: 0,
            color: 'black',
            fontFamily: Fonts.italicMedium,
            paddingHorizontal: 15,
            height: 45,
          }}
          placeholderTextColor={'rgba(130, 130, 130, 1)'}
          placeholder={palceholder}
          onChangeText={onChange}
          value={value}
        />
      </View>
    </View>
  );
}
