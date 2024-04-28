import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Gradient from '../HOC/Gradiant';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {SVGLeftArrow, SVGThreeDot2} from '../constants/Images';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Menu from './Menu';
import Menu2 from './Menu';
import {MENU_DATA_CHAT} from '../constants/MockData';
import useChannels from '../hooks/useChaneels';

export default function BlueHeader({title, threeDot}) {
  const navigation = useNavigation();
  const [isVisible, setisVisible] = useState(false);
  const channels = useChannels();
  if (!channels) {
    return (
      <LinearGradient
        colors={['rgba(108, 84, 230, 0.8)', 'rgba(55, 2, 200, 1)']}
        start={{x: 1, y: 0}} // Vertical gradient from top to bottom
        end={{x: 0.5, y: 1}}
        style={{
          // borderRadius: 9,

          zIndex: 99999,
          flex: 0,
          paddingBottom: 20,
          paddingTop: 60,
          borderRadius: 20,
          marginTop: -40,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{width: 20, height: 20}}
            onPress={() => navigation.goBack()}>
            <SvgXml xml={SVGLeftArrow} width={20} height={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.semibold,
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}>
            {title ?? 'Chat Box'}
          </Text>
          {threeDot ? (
            <SvgXml
              width={20}
              height={20}
              xml={SVGThreeDot2}
              onPress={() => {
                setisVisible(true);
              }}
            />
          ) : (
            <View />
          )}
        </View>
        <Menu2
          data={MENU_DATA_CHAT}
          isVisible={isVisible}
          closeModal={() => setisVisible(false)}
        />
      </LinearGradient>
    );
  }

  return (
    <View
      style={{
        // borderRadius: 9,
        backgroundColor: channels?.style_primary_color,
        zIndex: 99999,
        flex: 0,
        paddingBottom: 20,
        paddingTop: 60,
        borderRadius: 20,
        marginTop: -40,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: 20, height: 20}}
          onPress={() => navigation.goBack()}>
          <SvgXml xml={SVGLeftArrow} width={20} height={20} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.semibold,
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
          }}>
          {title ?? 'Chat Box'}
        </Text>
        {threeDot ? (
          <SvgXml
            width={20}
            height={20}
            xml={SVGThreeDot2}
            onPress={() => {
              setisVisible(true);
            }}
          />
        ) : (
          <View />
        )}
      </View>
      <Menu2
        data={MENU_DATA_CHAT}
        isVisible={isVisible}
        closeModal={() => setisVisible(false)}
      />
    </View>
  );
}
