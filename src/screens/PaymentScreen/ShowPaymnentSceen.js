import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  SVGArrowDesign,
  SVGArrowDesign2,
  SVGArrowDesign3,
  SVGCard,
  SVGDots,
  SVGProfile3,
} from '../../constants/Images';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import BlueHeader from '../../components/BlueHeader';
import Fonts from '../../constants/Fonts';
import {useDispatch} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {setBottomNavigation} from '../../redux/slices/authenticationSlice';
import GenericButton from '../../components/GenericButton';
import ListItem from '../../components/SlidingCard';
import {
  SVGAirtel,
  SVGIdea2,
  SVGJio,
  SVGTelia,
  SVGVoda,
} from '../../constants/Images';
import PaymentListItem from '../../components/PaymentListItem';
import useChannels from '../../hooks/useChaneels';
export default function ShowPaymnentSceen() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    if (isFocused) {
      dispatch(setBottomNavigation(false));
    }
  }, []);
  const renderSlideDrawer = ({item}) => <PaymentListItem item={item} />;
  const todoList = [
    {
      id: '1',
      method: 'Payment Method 1',
      accountBalance: '$10,000',
      cardType: 'VISA',
      cardNo: '1900 *****',
    },
    {
      id: '2',
      method: 'Payment Method 2',
      accountBalance: '$20,000',
      cardType: 'MASTER',
      cardNo: '1700 *****',
    },
    {
      id: '3',
      method: 'Payment Method 3',
      accountBalance: '$30,000',
      cardType: 'VISA',
      cardNo: '3900 *****',
    },
    {
      id: '4',
      method: 'Payment Method 4',
      accountBalance: '$40,000',
      cardType: 'VISA',
      cardNo: '4900 *****',
    },
    {
      id: '5',
      method: 'Payment Method 5',
      accountBalance: '$50,000',
      cardType: 'VISA',
      cardNo: '5900 *****',
    },

    // Add more items as needed
  ];
  const channels = useChannels();
  return (
    <Container
      noPadding={true}
      statusBarStyle="light"
      statusBarColor={
        channels ? channels?.style_primary_color : 'rgba(55, 2, 200, 1)'
      }
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient
        isBlue={true}
        color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)', '#fff']}>
        <BlueHeader title="Payment Method" />
        <SvgXml
          xml={SVGArrowDesign2}
          style={{position: 'absolute', right: 15, top: '10%'}}
        />
        <SvgXml
          xml={SVGArrowDesign3}
          style={{position: 'absolute', left: 15, top: '35%'}}
        />

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 130,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // position: 'absolute',
            // top: 0,
            // bottom: 0,
            // height: '80%',
          }}>
          <View style={{width: '100%', marginBottom: 30, marginTop: -135}}>
            <SvgXml
              xml={SVGCard}
              style={{position: 'relative', top: 0, width: '100%'}}
              width={'100%'}
              // height={'41%'}
            />
            <Text
              style={{
                position: 'absolute',
                left: 55,
                top: '18%',
                zIndex: 9999,
                color: 'white',
                fontSize: 27,
              }}>
              Aliana Smith
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: 55,
                top: '36%',
                zIndex: 9999,
                color: 'white',
                fontSize: 14,
                fontFamily: Fonts.semibold,
                fontWeight: '600',
              }}>
              Amazon Platinium
            </Text>

            <Text
              style={{
                position: 'absolute',
                left: 55,
                top: '48%',
                zIndex: 9999,
                color: 'white',
                fontSize: 20,
                fontFamily: Fonts.regular,
                fontWeight: '400',
              }}>
              1234 6789 1112 0101
            </Text>

            <Text
              style={{
                position: 'absolute',
                left: 55,
                top: '60%',
                zIndex: 9999,
                color: 'white',
                fontSize: 20,
                fontFamily: Fonts.semibold,
                fontWeight: '600',
              }}>
              $3.469.52
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(33, 34, 38, 1)',
              marginHorizontal: 8,
              fontFamily: Fonts.semibold,
              fontWeight: '600',
              fontSize: 17,
              marginTop: -40,
              marginBottom: 10,
            }}>
            Payment Methods and Accounts
          </Text>
          <FlatList
            style={{paddingHorizontal: 10}}
            removeClippedSubviews={true}
            data={todoList}
            keyExtractor={item => item.id}
            renderItem={renderSlideDrawer}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
        <GenericButton
          title={'Add New Payment Method'}
          onPress={() => navigation.navigate('AddPaymentScreen')}
          style={{
            borderRadius: 8,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}
        />
      </Gradient>
    </Container>
  );
}
