import React, {useEffect, useMemo} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setActiveTab,
  setBottomNavigation,
} from '../../redux/slices/authenticationSlice';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import Header from '../../components/Header';
import {STORIES} from '../../constants/MockData';
import GradiantText from '../../components/GradiantText';
import Fonts from '../../constants/Fonts';
import StoryCard from '../../components/StoryCard';
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
export default function ChatScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(setActiveTab('2'));
      navigation.navigate('ChatScreen');
      dispatch(setBottomNavigation(true));
    }
  }, [isFocused]);

  const renderStory = useMemo(() => {
    return ({item}) => <StoryCard item={item} />;
  }, []);

  const renderSlideDrawer = useMemo(() => {
    return ({item}) => <ListItem item={item} />;
  }, []);
  const todoList = [
    {
      id: '1',
      text: 'How are you bro ☺️?',
      isReply: false,
      name: 'iamblokee',
      icon: SVGStory2,
      count: 0,
    },
    {
      id: '2',
      text: 'Bye Bye ... ',
      isReply: false,
      name: 'Dilshad',
      icon: SVGStory3,
      count: 2,
    },
    {
      id: '3',
      text: 'Lets meet today',
      isReply: false,
      name: 'Rajib',
      icon: SVGStory4,
      count: 0,
    },
    {
      id: '4',
      text: '',
      isReply: true,
      name: 'Arun',
      icon: SVGStory5,
      count: 5,
    },
    {
      id: '5',
      text: 'Sorry bro 😖..',
      isReply: false,
      name: 'Akash',
      icon: SVGStory3,
      count: 1,
    },
    {
      id: '6',
      text: '',
      isReply: true,
      name: 'Alfaaz',
      icon: SVGStory2,
      count: 0,
    },
  ];
  return (
    <Container
      statusBarColor={'rgba(255, 255, 255, 0.3)'}
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
        <Header />
        <SafeAreaView>
          <FlatList
            removeClippedSubviews={true}
            data={STORIES}
            keyExtractor={item => item.id}
            renderItem={renderStory}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
          />
        </SafeAreaView>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#fff',
            width: 95,
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            height: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            // elevation: 1,
          }}>
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
          />
        </View>
      </Gradient>
    </Container>
  );
}
