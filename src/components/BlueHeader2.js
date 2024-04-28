import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Gradient from '../HOC/Gradiant';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {
  SVGLeftArrow,
  SVGRi,
  SVGSearch,
  SVGThreeDot2,
  SVGVoda,
} from '../constants/Images';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Menu from './Menu';
import Menu2 from './Menu';
import {MENU_DATA_CHAT} from '../constants/MockData';
import useChannels from '../hooks/useChaneels';

export default function BlueHeader2({title, threeDot, isLoading}) {
  const [searchFile, setsearchFile] = useState('');

  const navigation = useNavigation();
  const [isVisible, setisVisible] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const channels = useChannels();

  const handleChange = () => {};
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
        {isSearch ? (
          <View
            style={{
              width: '100%',
              // paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(245, 246, 247, 1)',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <SvgXml
              xml={SVGRi}
              width={20}
              height={20}
              onPress={() => setisSearch(false)}
            />
            <TextInput
              value={searchFile}
              onChangeText={e => handleChange(e)}
              placeholder="Search messages ... "
              placeholderTextColor={'gray'}
              style={{
                fontFamily: Fonts.medium,
                fontWeight: '500',
                paddingLeft: 40,
                width: '98%',
                height: 55,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{width: 20, height: 20}}
                onPress={() => navigation.goBack()}>
                <SvgXml xml={SVGLeftArrow} width={20} height={20} />
              </TouchableOpacity>
              <SvgXml
                style={{marginLeft: 10}}
                xml={SVGVoda}
                width={25}
                height={25}
              />

              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  fontWeight: '600',

                  color: 'white',
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                {title ?? 'Chat Box'}
              </Text>
            </View>
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
        )}
        <Menu2
          data={MENU_DATA_CHAT}
          isVisible={isVisible}
          closeModal={() => setisVisible(false)}
          cfmCallBack={e => {
            if (e === 'Search Messages') {
              setisVisible(false);
              setisSearch(true);
            }
          }}
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
      {isSearch ? (
        <View
          style={{
            width: '100%',
            // paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(245, 246, 247, 1)',
            paddingHorizontal: 10,
            borderRadius: 25,
          }}>
          <SvgXml
            xml={SVGRi}
            width={20}
            height={20}
            onPress={() => setisSearch(false)}
          />
          <TextInput
            value={searchFile}
            onChangeText={e => handleChange(e)}
            placeholder="Search messages ... "
            placeholderTextColor={'gray'}
            style={{
              fontFamily: Fonts.medium,
              fontWeight: '500',
              paddingLeft: 40,
              width: '98%',
              height: 55,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{width: 20, height: 20}}
              onPress={() => navigation.goBack()}>
              <SvgXml xml={SVGLeftArrow} width={20} height={20} />
            </TouchableOpacity>
            <SvgXml
              style={{marginLeft: 10}}
              xml={SVGVoda}
              width={25}
              height={25}
            />
            <View>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  fontWeight: '700',
                  color: 'white',
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                {title ?? 'Chat Box'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    padding: 3,
                    borderRadius: 20,
                    backgroundColor:
                      channels?.status === 'active' ? 'yellowgreen' : 'red',
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{
                    fontFamily: Fonts.regular,
                    fontWeight: '400',
                    textTransform: 'capitalize',
                    color: '#fff',
                    fontSize: 12,
                    marginLeft: 3,
                    lineHeight: 15,
                    // marginTop: 10,
                  }}>
                  {isLoading
                    ? 'Typing..'
                    : channels?.status === 'active'
                    ? 'Available'
                    : 'Unavailable'}
                </Text>
              </View>
            </View>
          </View>
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
      )}
      <Menu2
        data={MENU_DATA_CHAT}
        isVisible={isVisible}
        closeModal={() => setisVisible(false)}
        cfmCallBack={e => {
          if (e === 'Search Messages') {
            setisVisible(false);
            setisSearch(true);
          }
        }}
      />
    </View>
  );
}
