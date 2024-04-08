import React, {useState} from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {
  SVGDelete,
  SVGDelete2,
  SVGMute,
  SVGMute2,
  SVGPin,
  SVGPin2,
  SVGReply,
} from '../constants/Images';
import Fonts from '../constants/Fonts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GradiantContent from '../HOC/GrandiantContent';
import CardModal from './CardModal';

const PaymentListItem = ({item}) => {
  const swipeableRef = React.useRef(null);
  const [forceUpdate, setforceUpdate] = useState(false);

  const renderRightActions = (progress, dragX) => {
    const translateX = dragX.interpolate({
      inputRange: [0, Dimensions.get('window').width / 2],
      outputRange: [0, Dimensions.get('window').width / 2],
      extrapolate: 'clamp',
    });

    return (
      <GradiantContent
        color={['rgba(0, 73, 230, 0.4)', 'rgba(156, 21, 247, 0.2)']}
        style={{
          justifyContent: 'center',
          //   borderRadius: 15,
          alignItems: 'flex-end',
          height: '87%',
          // paddingVertical: 20,
          //   marginHorizontal: 3,
          marginLeft: -20,
          marginTop: 8,
          width: '50%', // Adjust width to stop halfway
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
          }}
          onPress={() => {
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
        ref={swipeableRef}
        renderRightActions={renderRightActions}
        overshootRight={false} // Ensure the swipe does not overshoot to the right
      >
        <View style={{marginVertical: 8}}>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 12,
              backgroundColor: 'rgba(247, 246, 255, 1)',
              borderRadius: 14,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 4,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.bold,
                  color: 'rgba(61, 61, 61, 1)',
                  fontSize: 16,
                }}>
                {item.method}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  fontSize: 16,
                  color: 'rgba(61, 61, 61, 1)',
                  lineHeight: 15,
                }}>
                {item.cardNo}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 4,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  color: 'rgba(130, 130, 130, 1)',
                  fontSize: 12,
                }}>
                Available balance
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  color: 'rgba(108, 84, 230, 1)',
                  fontSize: 12,
                }}>
                {item.accountBalance}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 4,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  color: 'rgba(130, 130, 130, 1)',
                  fontSize: 12,
                }}>
                Card Type
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.semibold,
                  color: 'rgba(108, 84, 230, 1)',
                  fontSize: 12,
                }}>
                {item.cardType}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default PaymentListItem;
