import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  SVGCentralBank,
  SVGChat,
  SVGSend,
  SVGThreeDot,
} from '../constants/Images';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import MenuDetails from './MenuDetails';
import {MENU_DATA_DISCOVER} from '../constants/MockData';

export default function DiscoverCard({item, key}) {
  const navigation = useNavigation();
  const [isVisible, setisVisible] = useState(false);

  return (
    <View
      key={key}
      style={{
        borderRadius: 15,
        backgroundColor: 'rgba(237, 237, 237, 1)',
        // height: 200,
        width: '48%',
        elevation: 1,
        marginVertical: 10,
      }}>
      <SvgXml
        onPress={() => {
          setisVisible(true);
        }}
        xml={SVGThreeDot}
        style={{position: 'absolute', right: 10, top: 10}}
      />
      <View style={{marginTop: 10}}>
        <SvgXml xml={item.icon} style={{alignSelf: 'center'}} />
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontFamily: Fonts.bold,
            color: item.color,
            marginTop: 15,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            textAlign: 'center',
            fontFamily: Fonts.regular,
            color: 'black',
            lineHeight: 13,
            // marginTop: 10,
          }}>
          {item.description}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChattingScreen')}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            width: '50%',
            borderBottomStartRadius: 15,
            borderRightWidth: 1,
            borderColor: 'rgba(237, 237, 237, 1)',
          }}>
          <SvgXml style={{alignSelf: 'center'}} xml={SVGChat} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatBox')}
          style={{
            backgroundColor: '#fff',
            padding: 9,
            width: '50%',
            borderBottomEndRadius: 15,
          }}>
          <SvgXml style={{alignSelf: 'center'}} xml={SVGSend} />
        </TouchableOpacity>
      </View>

      <MenuDetails
        data={MENU_DATA_DISCOVER}
        isVisible={isVisible}
        closeModal={() => setisVisible(false)}
        cfmCallBack={e => {
          if (e === 'View') {
            setisVisible(false);
            navigation.navigate('ChattingScreen');
          }
        }}
      />
    </View>
  );
}
