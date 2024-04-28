import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Gradient from '../HOC/Gradiant';
import {SvgXml} from 'react-native-svg';
import {
  SVGDelete,
  SVGDelete2,
  SVGMute,
  SVGMute2,
  SVGPin,
  SVGPin2,
  SVGReply,
  SVGStory2,
  SVGStory3,
  SVGStory4,
  SVGStory5,
} from '../constants/Images';
import GradiantContent from '../HOC/GrandiantContent';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import useChannels from '../hooks/useChaneels';

const ListItem = ({item, pinItem}) => {
  const channels = useChannels();

  const [forceUpdate, setforceUpdate] = useState(false);
  const navigation = useNavigation();
  const RightSwipeActions = () => {
    return (
      <GradiantContent
        color={['rgba(0, 73, 230, 0.4)', 'rgba(156, 21, 247, 0.2)']}
        style={{
          justifyContent: 'center',
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          alignItems: 'flex-end',
          height: '92%',
          marginLeft: -20,
          // paddingVertical: 20,
          margin: 3,
          width: '50%', // Adjust width to stop halfway
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
          }}
          onPress={() => {
            pinItem(item);

            item.isPined = !item.isPined;
            setforceUpdate(state => !state);
          }}>
          <SvgXml xml={item?.isPined ? SVGPin : SVGPin2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
          }}
          onPress={() => {
            item.isDelete = !item.isDelete;
            setforceUpdate(state => !state);
          }}>
          <SvgXml xml={item?.isDelete ? SVGDelete : SVGDelete2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
          }}
          onPress={() => {
            item.isMute = !item.isMute;
            setforceUpdate(state => !state);
          }}>
          <SvgXml xml={item?.isMute ? SVGMute : SVGMute2} />
        </TouchableOpacity>
      </GradiantContent>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={RightSwipeActions}
        friction={1}
        // leftThreshold={100 / 2}
        onSwipeableOpen={direction => {
          if (direction === 'right') {
          } else if (direction === 'left') {
          }
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChattingScreen')}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            backgroundColor: 'rgba(247, 246, 255, 1)',
            borderRadius: 15,
            margin: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* <SvgXml xml={item?.icon} /> */}
            <Image
              source={item?.icon}
              width={10}
              height={10}
              style={{width: 40, height: 40}}
            />
            <View style={{marginHorizontal: 8}}>
              <Text
                style={{
                  fontFamily: Fonts.bold,
                  fontWeight: '700',
                  color: 'black',
                }}>
                {item?.name}
              </Text>
              {item?.text ? (
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: item.read ? Fonts.regular : Fonts.semibold,
                    fontWeight: item.read ? '400' : '700',
                    fontSize: 12,
                    color: 'black',
                    lineHeight: 15,
                    marginTop: 6,
                  }}>
                  {item?.text}
                </Text>
              ) : (
                <SvgXml xml={SVGReply} />
              )}
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              alignSelf: 'flex-end',
              marginBottom: 10,
            }}>
            <View>
              {item.count > 0 &&
                (!channels ? (
                  <Gradient
                    color={['#0049E6', '#FF4CF8']}
                    style={{
                      alignSelf: 'flex-end',
                      // width: 15,
                      // height: 15,
                      paddingHorizontal: 5,
                      // paddingVertical: 1,
                      borderRadius: 30,
                      marginBottom: 5,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontFamily: Fonts.bold,
                        fontWeight: '700',
                        fontSize: 10,
                        color: 'white',
                      }}>
                      {item.count}
                    </Text>
                  </Gradient>
                ) : (
                  <View
                    style={{
                      backgroundColor: channels?.style_primary_color,
                      alignSelf: 'flex-end',
                      // width: 15,
                      // height: 15,
                      paddingHorizontal: 5,
                      // paddingVertical: 1,
                      borderRadius: 30,
                      marginBottom: 5,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontFamily: Fonts.bold,
                        fontWeight: '700',
                        fontSize: 10,
                        color: 'white',
                      }}>
                      {item.count}
                    </Text>
                  </View>
                ))}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: Fonts.medium,
                  fontSize: 12,
                  color: 'black',
                  lineHeight: 15,
                  marginTop: 10,
                  textAlign: 'right',
                  fontWeight: '500',
                }}>
                Today, 12:25
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
export default ListItem;
