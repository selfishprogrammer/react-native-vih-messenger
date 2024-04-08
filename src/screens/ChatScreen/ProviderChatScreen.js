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
import {
  SVGAirtel,
  SVGIdea2,
  SVGPluss2,
  SVGTelia,
  SVGVoda,
} from '../../constants/Images';
import {todoList} from '../../constants/MockData';
import {SvgXml} from 'react-native-svg';

export default function ProviderChatScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [height] = useState(new Animated.Value(0));
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filterSearch, setfilterSearch] = useState([]);
  const [openItemIndex, setOpenItemIndex] = useState(null);
  useEffect(() => {
    if (isFocused) {
      dispatch(setActiveTab('2'));
      navigation.navigate('ProviderChatScreen');
      dispatch(setBottomNavigation(true));
      setfilterSearch(todoList);
    }
  }, [isFocused]);

  const [opacity] = useState(new Animated.Value(1));
  const pinItem = item => {
    // Update the isPinned property of the item
    const updatedData = filterSearch.map(i => ({
      ...i,
      isPinned: i.id === item.id ? !i.isPinned : false, // Toggle isPinned for the selected item, unpin others
    }));

    // Move the pinned item to the top of the list
    const pinnedItem = updatedData.find(i => i.id === item.id && item.isPinned);
    if (pinnedItem) {
      updatedData.splice(updatedData.indexOf(pinnedItem), 1);
      updatedData.unshift(pinnedItem);
    }

    setfilterSearch(updatedData);
  };
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
  const handleOpenItem = index => {
    if (openItemIndex === index) {
      // If the same item is tapped again, close it
      setOpenItemIndex(null);
    } else {
      // Otherwise, open the selected item and close any previously opened item
      setOpenItemIndex(index);
    }
  };
  const renderSlideDrawer = ({item, index}) => {
    console.log(openItemIndex);
    return (
      <ListItem
        item={item}
        index={index}
        isOpen={index === openItemIndex}
        setOpenItemIndex={handleOpenItem}
        pinItem={pinItem}
      />
    );
  };

  const heightInterpolate = height.interpolate({
    inputRange: [0, 300],
    outputRange: ['85%', '100%'],
    extrapolate: 'clamp',
  });

  // const todoList = [
  //   {
  //     id: '1',
  //     text: 'How are you bro ☺️?',
  //     isReply: false,
  //     name: 'Airtel',
  //     // icon: SVGAirtel,
  //     count: 0,
  //     read: true,
  //     isMute: true,
  //     isDelete: true,
  //     isPined: false,
  //   },
  //   {
  //     id: '2',
  //     text: 'Bye Bye ... ',
  //     isReply: false,
  //     name: 'Idea',
  //     // icon: SVGIdea2,
  //     count: 2,
  //     read: false,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '1',
  //     text: 'How are you bro ☺️?',
  //     isReply: false,
  //     name: 'Airtel',
  //     // icon: SVGAirtel,
  //     count: 0,
  //     read: true,
  //     isMute: true,
  //     isDelete: true,
  //     isPined: false,
  //   },
  //   {
  //     id: '2',
  //     text: 'Bye Bye ... ',
  //     isReply: false,
  //     name: 'Idea',
  //     // icon: SVGIdea2,
  //     count: 2,
  //     read: false,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '3',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '4',
  //     text: 'Hello ☺️',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '5',
  //     text: 'Bye Bye ... ',
  //     isReply: false,
  //     name: 'Idea',
  //     // icon: SVGIdea2,
  //     count: 2,
  //     read: false,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '6',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '7',
  //     text: 'Lets fight 😡',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '8',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '9',
  //     text: 'Gop Goa Gone ...',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '10',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '9',
  //     text: 'Gop Goa Gone ...',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '10',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '9',
  //     text: 'Gop Goa Gone ...',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '10',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '9',
  //     text: 'Gop Goa Gone ...',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '10',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   {
  //     id: '9',
  //     text: 'Gop Goa Gone ...',
  //     isReply: true,
  //     name: 'Vodafone',
  //     // icon: SVGVoda,
  //     count: 5,
  //     read: false,
  //     isMute: true,
  //     isDelete: false,
  //     isPined: true,
  //   },
  //   {
  //     id: '10',
  //     text: 'Lets meet today',
  //     isReply: false,
  //     name: 'Telia',
  //     // icon: SVGTelia,
  //     count: 0,
  //     read: true,
  //     isMute: false,
  //     isDelete: false,
  //     isPined: false,
  //   },
  //   // Add more items as needed
  // ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Animated.timing(height, {
        toValue: 0, // Bring the height back to 90% after pull-to-refresh
        duration: 300,
        useNativeDriver: false,
      }).start(() => setScrollEnabled(false));
      setfilterSearch(todoList);
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
          {/* 
          {props?.route?.params?.forAction &&
            props?.route?.params?.forAction === 'newChat' && (
              <SvgXml xml={SVGPluss2} style={{position: 'absolute', top: 10}} />
            )} */}
        </Gradient>
      </Container>
    </GestureHandlerRootView>
  );
}
