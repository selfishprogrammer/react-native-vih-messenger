import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import BlueHeader from '../../components/BlueHeader';
import InputFeild from '../../components/InputFeild';
import GenericButton from '../../components/GenericButton';
import {SvgXml} from 'react-native-svg';
import {SVGCalender, SVGCard2, SVGDown2} from '../../constants/Images';
import CardModal from '../../components/CardModal';
import Fonts from '../../constants/Fonts';
import useChannels from '../../hooks/useChaneels';
import useHandleImageColor from '../../hooks/useHandleImageColor';

export default function AddPaymentScreen() {
  const [isCardVisible, setisCardVisible] = useState(false);
  const [cardSelect, setcardSelect] = useState({});
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
        color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.15)']}>
        <BlueHeader title="Add Payment Method" />
        <CardModal
          visible={isCardVisible}
          closeModal={e => {
            setcardSelect(e);
            setisCardVisible(false);
          }}
        />
        <View style={{margin: 10}}>
          {Object.values(cardSelect).length > 0 ? (
            <TouchableOpacity
              onPress={() => setisCardVisible(true)}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(108, 84, 230, 0.16)',
                padding: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <SvgXml xml={cardSelect?.icon} />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    marginHorizontal: 8,
                    fontFamily: Fonts.regular,
                    fontWeight: '400',
                  }}>
                  {cardSelect?.name}
                </Text>
              </View>
              <SvgXml xml={SVGDown2} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setisCardVisible(true)}
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(108, 84, 230, 0.16)',
                padding: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <SvgXml xml={SVGCard2} />
              <SvgXml xml={SVGDown2} />
            </TouchableOpacity>
          )}

          <InputFeild
            palceholder={'Alice Gua'}
            label={'Card Holder Full Name'}
          />

          <InputFeild
            palceholder={'1900 **** **** ****'}
            label={'Card Number'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // width: '100%',
            }}>
            <InputFeild
              style={{width: '40%', marginRight: 10}}
              palceholder={'***'}
              label={'CVC'}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '80%',
              }}>
              <InputFeild
                palceholder={'MM/YY'}
                label={'Expiry Date'}
                style={{width: '53%'}}
              />
              <SvgXml
                xml={
                  channels
                    ? useHandleImageColor(
                        SVGCalender,
                        channels?.style_primary_color,
                      )
                    : SVGCalender
                }
                style={{marginBottom: -45}}
              />
            </View>
          </View>
          <GenericButton
            title={'Add Payment Method'}
            //   onPress={() => navigation.navigate('AddPaymentScreen')}
            style={{
              borderRadius: 8,
              width: '100%',
              alignSelf: 'center',
              marginVertical: 30,
            }}
          />
        </View>
      </Gradient>
    </Container>
  );
}
