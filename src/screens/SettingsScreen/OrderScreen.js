import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import BlueHeader from '../../components/BlueHeader';
import Fonts from '../../constants/Fonts';
import OrderCard from '../../components/OrderCard';

export default function OrderScreen() {
  const [selectedBtn, setSelectedBtn] = useState('All'); // State to track the selected button

  const handleBtn = btnName => {
    setSelectedBtn(btnName); // Update the state with the selected button name
  };

  return (
    <Container
      statusBarColor={'rgba(55, 2, 200, 1)'}
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
        <BlueHeader title={'Order Listing'} />
        <ScrollView>
          <ScrollView
            horizontal
            contentContainerStyle={{marginVertical: 10}}
            showsHorizontalScrollIndicator={false}>
            {['All', 'Discover', 'Received', 'Cancelled'].map(
              (btnName, index) =>
                selectedBtn !== btnName ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleBtn(btnName)} // Pass the button name to the handleBtn function
                    style={{
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: 'rgba(178, 163, 255, 1)', // Change borderColor based on button selection
                      padding: 10,
                      marginHorizontal: 10,
                      backgroundColor: 'transparent', // Change backgroundColor based on button selection
                    }}>
                    <Text
                      style={{
                        color: 'rgba(12, 38, 56, 1)',
                        fontFamily: Fonts.regular,
                        fontSize: 12,
                      }}>
                      {btnName.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      //   padding: 10,
                      //   marginHorizontal: 10,
                      borderRadius: 20,
                    }}
                    onPress={() => {}}>
                    <Gradient
                      color={['#FF4CF8', '#0049E6']}
                      style={{
                        borderRadius: 20,
                        // borderWidth: 1,
                        // borderColor: 'rgba(178, 163, 255, 1)', // Change borderColor based on button selection
                        padding: 10,
                        marginHorizontal: 10,
                        backgroundColor: 'transparent',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontSize: 12,
                          fontFamily: Fonts.medium,
                        }}>
                        {btnName.toUpperCase()}
                      </Text>
                    </Gradient>
                  </TouchableOpacity>
                ),
            )}
          </ScrollView>
          <View style={{padding: 18}}>
            <OrderCard />
          </View>
        </ScrollView>
      </Gradient>
    </Container>
  );
}
