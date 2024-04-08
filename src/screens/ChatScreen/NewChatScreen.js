import React, {useEffect, useState} from 'react';
import {
  View,
  Animated,
  PanResponder,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setActiveTab,
  setBottomNavigation,
} from '../../redux/slices/authenticationSlice';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import Header from '../../components/Header';
import GradiantText from '../../components/GradiantText';
import Fonts from '../../constants/Fonts';
import ListItem from '../../components/SlidingCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {todoList} from '../../constants/MockData';
import {SvgXml} from 'react-native-svg';

export default function NewChatScreen(props) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [height] = useState(new Animated.Value(0));
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filterSearch, setfilterSearch] = useState([]);

  useEffect(() => {
    if (isFocused) {
      dispatch(setBottomNavigation(false));
      setfilterSearch(todoList);
    }
  }, [isFocused]);

  const [opacity] = useState(new Animated.Value(1));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dy) > 5 && !scrollEnabled && gestureState.dy < 0,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy < 0) {
        Animated.spring(height, {
          toValue: Math.min(gestureState.dy * -1, 300),
          duration: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy >= 100) {
        setRefreshing(true);
        setScrollEnabled(true); // Enable pull-to-refresh
      } else {
        Animated.spring(height, {
          toValue: 300, // Fix the height to 100% when scrolling up
          duration: 300,
          useNativeDriver: false,
        }).start(() => setScrollEnabled(true)); // Enable pull-to-refresh
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const renderSlideDrawer = ({item}) => <ListItem item={item} />;

  const heightInterpolate = height.interpolate({
    inputRange: [0, 300],
    outputRange: ['85%', '100%'],
    extrapolate: 'clamp',
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Animated.timing(height, {
        toValue: 0, // Bring the height back to 90% after pull-to-refresh
        duration: 300,
        useNativeDriver: false,
      }).start(() => setScrollEnabled(false));
    }, 1000);
  };
  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      Animated.spring(height, {
        toValue: 10, // Bring the height back to 90% after pull-to-refresh
        duration: 300,
        useNativeDriver: false,
      }).start(() => setScrollEnabled(false));
    }
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Container
        noPadding={true}
        statusBarColor={'rgba(255, 255, 255, 0.3)'}
        backgroundColor={'rgba(255, 255, 255, 0.3)'}>
        <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
          <Header
            type={'Chat'}
            onSearch={e => {
              console.log(e.length, 'e');
              setfilterSearch(e);
            }}
          />
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: heightInterpolate,
              backgroundColor: '#fff',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              padding: 10,
              opacity: opacity,
            }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 5,
                borderColor: '#fff',
                width: 95,
                alignSelf: 'center',
                marginTop: -25,
                marginBottom: 15,
                height: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 20,
              }}></TouchableOpacity>
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
              data={filterSearch}
              keyExtractor={item => item.id}
              renderItem={renderSlideDrawer}
              onEndReachedThreshold={0.5}
              onScroll={handleScroll}
              showsVerticalScrollIndicator={false}
              scrollEnabled={scrollEnabled}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </Animated.View>
        </Gradient>
      </Container>
    </GestureHandlerRootView>
  );
}
