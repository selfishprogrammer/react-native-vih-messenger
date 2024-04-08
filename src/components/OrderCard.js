import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SVGCart, SVGPro, SVGRight} from '../constants/Images';
import Fonts from '../constants/Fonts';
import Line from './Line';
import CardHeader from './CardHeader';

export default function OrderCard() {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <CardHeader />
      <Line />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 5,
              borderWidth: 0.5,
              borderColor: 'rgba(242, 243, 244, 1)',
            }}>
            <SvgXml xml={SVGPro} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontFamily: Fonts.bold, color: 'black'}}>
              GNC Syrup
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, fontFamily: Fonts.regular}}>
                150ml
              </Text>
              <View
                style={{
                  paddingHorizontal: 8,

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
                  x1
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontFamily: Fonts.regular,
            marginTop: 29,
          }}>
          11.80 €
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Line />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontSize: 13,
              color: 'rgba(108, 84, 230, 1)',
            }}>
            1 Item | 11.80 €
          </Text>
          <SvgXml xml={SVGRight} />
        </View>
      </View>
    </View>
  );
}
