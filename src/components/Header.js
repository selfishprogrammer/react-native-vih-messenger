import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  Image,
} from 'react-native'; // Import Animated from 'react-native'
import {SvgXml} from 'react-native-svg';
import {
  SVGArroplane,
  SVGPlus,
  SVGPlusSingle,
  SVGProfile,
  SVGRi,
  SVGSearch,
  SVGSearchSingle,
} from '../constants/Images';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import {DISCOVER_CARD, todoList} from '../constants/MockData';
import {useDispatch, useSelector} from 'react-redux';
import useChannels from '../hooks/useChaneels';
import useHandleImageColor from '../hooks/useHandleImageColor';
import {setCloseSDK} from '../redux/slices/authenticationSlice';

export default function Header({type, onSearch, onClose}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isVisible, setisVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1)); // Initialize fade animation value
  const [searchFile, setsearchFile] = useState('');
  const [filterSearch, setfilterSearch] = useState([]);
  const channels = useChannels();
  console.log(channels, 'channelschannels');
  const toggleSearch = () => {
    if (!isVisible) {
      // Start fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Start fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    // Toggle visibility
    setisVisible(!isVisible);
  };
  const handleChange = e => {
    setsearchFile(e);
    let arr = [];
    if (e.length > 0) {
      if (type === 'Discover') {
        arr = DISCOVER_CARD.filter(i => {
          return i?.name?.toUpperCase().includes(e.toUpperCase());
        });
      } else {
        arr = todoList.filter(i => {
          return i?.name?.toUpperCase().includes(e.toUpperCase());
        });

        console.log(arr.length, 'arrr');
      }
      onSearch(arr);
    } else {
      onSearch(type === 'Discover' ? DISCOVER_CARD : todoList);
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      {/* {channels && !isVisible && (
        <SvgXml
          onPress={() => onClose(false)}
          xml={SVGRi}
          width={20}
          height={20}
          style={{marginTop: 15}}
        />
      )} */}
      {isVisible && (
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
          <SvgXml onPress={toggleSearch} xml={SVGRi} width={20} height={20} />
          <TextInput
            value={searchFile}
            onChangeText={e => handleChange(e)}
            placeholder="Search anything ... "
            placeholderTextColor={'gray'}
            style={{
              fontFamily: Fonts.medium,
              paddingLeft: 40,
              width: '98%',
              height: 55,
              fontWeight: '500',
            }}
          />
        </View>
      )}
      <Animated.View style={{opacity: fadeAnim}}>
        {/* Apply fade animation */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {channels ? (
            <View
              style={{
                marginTop: 20,
                marginRight: 10,
                borderWidth: 3,
                padding: 7,
                borderColor: channels?.style_primary_color,
                borderRadius: 30,
              }}>
              <Image
                style={{width: 30, height: 30, resizeMode: 'contain'}}
                source={{
                  uri: channels?.chat_boat_logo,
                }}
              />
              <SvgXml
                xml={useHandleImageColor(
                  SVGArroplane,
                  channels?.style_primary_color,
                )}
                style={{position: 'absolute', left: -13, top: 0}}
              />
            </View>
          ) : (
            <SvgXml xml={SVGProfile} />
          )}
          <View style={{marginTop: channels ? 20 : -10}}>
            <Text
              style={{
                color: 'rgba(138, 140, 169, 1)',
                fontSize: 12,
                fontFamily: Fonts.regular,
                fontWeight: '400',
              }}>
              Good Morning
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: Fonts.bold,
                fontWeight: '800',
                lineHeight: 22,
                marginTop: 10,
              }}>
              {channels?.chat_boat_name}
            </Text>
          </View>
        </View>
      </Animated.View>
      <TouchableOpacity onPress={toggleSearch}>
        {/* Change from View to TouchableOpacity */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {!channels ? (
            <SvgXml xml={SVGSearch} style={{marginHorizontal: 10}} />
          ) : (
            <View
              style={{
                padding: 11,
                borderRadius: 20,
                backgroundColor: channels?.style_primary_color,
                marginHorizontal: 10,
                marginTop: 20,
              }}>
              <SvgXml xml={SVGPlusSingle} />
            </View>
          )}
          {channels ? (
            <View
              style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: channels?.style_primary_color,
                marginHorizontal: 10,
                marginTop: 20,
              }}>
              <SvgXml xml={SVGSearchSingle} />
            </View>
          ) : (
            <SvgXml
              xml={SVGPlus}
              onPress={() =>
                navigation.navigate('NewChatScreen', {
                  forAction: 'newChat',
                })
              }
            />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
