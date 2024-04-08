import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import BlueHeader from '../../components/BlueHeader';
import {SvgXml} from 'react-native-svg';
import {SVGChatCentral} from '../../constants/Images';
import Fonts from '../../constants/Fonts';
import GenericButton from '../../components/GenericButton';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setBottomNavigation} from '../../redux/slices/authenticationSlice';

export default function ChatBox() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      dispatch(setBottomNavigation(true));
    }
  }, [isFocused]);
  return (
    <Container
      noPadding={true}
      statusBarStyle="light"
      statusBarColor={'rgba(55, 2, 200, 1)'}
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
        <BlueHeader />

        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#fff',
            marginHorizontal: 20,
            height: 260,
            marginTop: 100,
            borderRadius: 15,
            borderColor: 'rgba(227, 227, 227, 1)',
          }}>
          <SvgXml
            xml={SVGChatCentral}
            style={{position: 'absolute', top: -80, left: 10}}
          />
          <View style={{marginTop: 60}}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontFamily: Fonts.bold,
                fontSize: 18,
              }}>
              Central Bank Of India
            </Text>
            <Text
              style={{
                color: 'gray',
                textAlign: 'center',
                fontFamily: Fonts.regular,
                fontSize: 12,
              }}>
              Bank and Finance
            </Text>
            <Text
              style={{
                color: 'gray',
                textAlign: 'center',
                fontFamily: Fonts.regular,
                fontSize: 12,
                marginTop: 10,
                marginHorizontal: 25,
              }}>
              Hello Nice to see you here! By pressing the "Start chat" button
              you agree to have your personal data processed as described in our
              Privacy Policy
            </Text>
            <GenericButton
              onPress={() => navigation.navigate('ChattingScreen')}
              title={'Start Chat'}
              style={{
                width: '40%',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </Gradient>
    </Container>
  );
}
