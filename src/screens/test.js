import React, {useEffect, useMemo, useState} from 'react';
import {View, Animated, PanResponder, FlatList, Text} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setActiveTab} from '../../redux/slices/authenticationSlice';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import Header from '../../components/Header';
import GradiantText from '../../components/GradiantText';
import Fonts from '../../constants/Fonts';
import DiscoverCard from '../../components/DiscoverCard';
import ListItem from '../../components/SlidingCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  SVGDelete,
  SVGMute,
  SVGPin,
  SVGReply,
  SVGStory2,
  SVGStory3,
  SVGStory4,
  SVGStory5,
} from '../../constants/Images';
import {
  SVGAirtel,
  SVGIdea2,
  SVGJio,
  SVGTelia,
  SVGVoda,
} from '../constants/Images';
export default function ProviderChatScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(setActiveTab('2'));
      navigation.navigate('ProviderChatScreen');
    }
  }, [isFocused]);

  const [height] = useState(new Animated.Value(0));
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dy) > 5,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy < 0) {
        height.setValue(gestureState.dy);
        setScrollEnabled(false);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -100) {
        Animated.timing(height, {
          toValue: -300,
          duration: 300,
          useNativeDriver: false,
        }).start(() => setScrollEnabled(true));
      } else {
        Animated.timing(height, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const heightInterpolate = height.interpolate({
    inputRange: [-300, 0],
    outputRange: ['50%', '90%'],
    extrapolate: 'clamp',
  });

  const renderSlideDrawer = useMemo(() => {
    return ({item}) => <ListItem item={item} />;
  }, []);

  const todoList = [
    {
      id: '1',
      text: 'How are you bro ☺️?',
      isReply: false,
      name: 'Airtel',
      icon: SVGAirtel,
      count: 0,
      read: true,
    },
    {
      id: '2',
      text: 'Bye Bye ... ',
      isReply: false,
      name: 'Idea',
      icon: SVGIdea2,
      count: 2,
      read: false,
    },
    {
      id: '3',
      text: 'Lets meet today',
      isReply: false,
      name: 'Telia',
      icon: SVGTelia,
      count: 0,
      read: true,
    },
    {
      id: '4',
      text: '',
      isReply: true,
      name: 'Vodafone',
      icon: SVGVoda,
      count: 5,
      read: false,
    },
    {
      id: '5',
      text: 'Sorry bro 😖..',
      isReply: false,
      name: 'Jio Digital Life',
      icon: SVGJio,
      count: 1,
      read: false,
    },
    {
      id: '7',
      text: 'How are you bro ☺️?',
      isReply: false,
      name: 'Airtel',
      icon: SVGAirtel,
      count: 0,
      read: true,
    },
    {
      id: '8',
      text: 'Bye Bye ... ',
      isReply: false,
      name: 'Idea',
      icon: SVGIdea2,
      count: 2,
      read: false,
    },
    {
      id: '9',
      text: 'Lets meet today',
      isReply: false,
      name: 'Telia',
      icon: SVGTelia,
      count: 0,
      read: true,
    },
    {
      id: '10',
      text: '',
      isReply: true,
      name: 'Vodafone',
      icon: SVGVoda,
      count: 5,
      read: false,
    },
    {
      id: '11',
      text: 'Sorry bro 😖..',
      isReply: false,
      name: 'Jio Digital Life',
      icon: SVGJio,
      count: 1,
      read: true,
    },
  ];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Container
        statusBarColor={'rgba(255, 255, 255, 0.3)'}
        backgroundColor={'rgba(255, 255, 255, 0.3)'}>
        <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
          <Header />
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: heightInterpolate,
              backgroundColor: '#fff',
            }}
            {...panResponder.panHandlers}>
            <GradiantText
              style={{
                fontSize: 25,
                fontFamily: Fonts.bold,
                color: 'rgba(130, 130, 130, 1)',
                textAlign: 'center',
                marginVertical: 15,
              }}
              colors={[
                'rgba(108, 84, 230, 1)',
                'rgba(156, 21, 247, 1)',
                'rgba(108, 84, 230, 1)',
              ]}>
              Chats
            </GradiantText>
            <FlatList
              removeClippedSubviews={true}
              data={todoList}
              keyExtractor={item => item.id}
              renderItem={renderSlideDrawer}
              onEndReachedThreshold={0.5}
              showsVerticalScrollIndicator={false}
              scrollEnabled={scrollEnabled}
            />
          </Animated.View>
        </Gradient>
      </Container>
    </GestureHandlerRootView>
  );
}
