import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, TextInput} from 'react-native'; // Import Animated from 'react-native'
import {SvgXml} from 'react-native-svg';
import {SVGPlus, SVGProfile, SVGRi, SVGSearch} from '../constants/Images';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import {DISCOVER_CARD, todoList} from '../constants/MockData';

export default function Header({type, onSearch}) {
  const navigation = useNavigation();
  const [isVisible, setisVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1)); // Initialize fade animation value
  const [searchFile, setsearchFile] = useState('');
  const [filterSearch, setfilterSearch] = useState([]);
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
          <SvgXml xml={SVGProfile} />
          <View style={{marginTop: -10}}>
            <Text
              style={{
                color: 'rgba(138, 140, 169, 1)',
                fontSize: 12,
                fontFamily: Fonts.regular,
              }}>
              Good Morning
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: Fonts.bold,
                lineHeight: 22,
              }}>
              Alice Guo
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
          <SvgXml xml={SVGSearch} style={{marginHorizontal: 10}} />
          <SvgXml
            xml={SVGPlus}
            onPress={() =>
              navigation.navigate('NewChatScreen', {
                forAction: 'newChat',
              })
            }
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
