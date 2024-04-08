import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setActiveTab,
  setBottomNavigation,
} from '../../redux/slices/authenticationSlice';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import {SvgXml} from 'react-native-svg';
import {
  SVGArrowDesign,
  SVGArrowDesign2,
  SVGArrowDesign3,
  SVGDots,
  SVGDownArrow,
  SVGEdit,
  SVGLeftArrow2,
  SVGMode,
  SVGNotification,
  SVGOrders,
  SVGProfile3,
  SVGStatus,
  SVGpayment,
} from '../../constants/Images';
import GradiantText from '../../components/GradiantText';
import Fonts from '../../constants/Fonts';
import CustomSwitch from '../../components/CustomSwitch';

export default function SettingScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [value, setvalue] = useState(false);
  const [showMore, setshowMore] = useState(false);

  useEffect(() => {
    if (isFocused) {
      navigation.navigate('SettingScreen');
      dispatch(setActiveTab('3'));
      dispatch(setBottomNavigation(true));
    }
  }, [isFocused]);
  return (
    <Container
      statusBarColor={'rgba(156, 21, 247, 0.1)'}
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient
        isBlue={true}
        color={[
          'rgba(156, 21, 247, 0.1)',
          'rgba(200, 222, 255, 0.6)',
          'rgba(156, 21, 247, 0.1)',
          'rgba(255, 255, 255, 0.2)',
        ]}>
        <ScrollView>
          <SvgXml xml={SVGArrowDesign} />
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <SvgXml xml={SVGDots} />
            <SvgXml
              xml={SVGProfile3}
              style={{position: 'absolute', right: '4%', top: '10%'}}
            />
          </View>
          <SvgXml
            xml={SVGArrowDesign2}
            style={{position: 'absolute', right: 15, top: '20%'}}
          />
          <SvgXml
            xml={SVGArrowDesign3}
            style={{position: 'absolute', left: 15, top: '35%'}}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 12,
              alignSelf: 'center',
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <SvgXml xml={SVGEdit} />
            <GradiantText
              style={{
                fontSize: 14,
                fontFamily: Fonts.bold,
                color: 'rgba(130, 130, 130, 1)',
                textAlign: 'center',
                // marginVertical: 15,
              }}
              colors={[
                'rgba(108, 84, 230, 1)',
                'rgba(156, 21, 247, 1)',
                'rgba(108, 84, 230, 1)',
              ]}>
              vih/username90//
            </GradiantText>
          </View>
          <Text
            style={{
              color: 'black',
              marginHorizontal: 8,
              fontFamily: Fonts.bold,
              marginTop: 40,
            }}>
            Basic Settings
          </Text>
          <View style={{margin: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                // elevation: 1,
                marginVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVGStatus} />
                <Text
                  style={{
                    color: 'black',
                    marginHorizontal: 8,
                    fontFamily: Fonts.regular,
                  }}>
                  Active Status
                </Text>
              </View>
              <CustomSwitch
                value={value}
                onValueChange={e => {
                  setvalue(e);
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => setshowMore(state => !state)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                // elevation: 1,
                marginVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVGNotification} />
                <Text
                  style={{
                    color: 'black',
                    marginHorizontal: 8,
                    fontFamily: Fonts.regular,
                  }}>
                  Notification
                </Text>
              </View>
              <SvgXml xml={SVGDownArrow} />
            </TouchableOpacity>
            {/* hello */}
            {showMore && (
              <View style={{backgroundColor: '#fff', borderRadius: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 15,
                    // elevation: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        marginHorizontal: 8,
                        fontFamily: Fonts.regular,
                      }}>
                      Vibration
                    </Text>
                  </View>
                  <CustomSwitch
                    value={value}
                    onValueChange={e => {
                      setvalue(e);
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 15,
                    // elevation: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        marginHorizontal: 8,
                        fontFamily: Fonts.regular,
                      }}>
                      Pop up notification
                    </Text>
                  </View>
                  <CustomSwitch
                    value={value}
                    onValueChange={e => {
                      setvalue(e);
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 15,
                    // elevation: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        marginHorizontal: 8,
                        fontFamily: Fonts.regular,
                      }}>
                      Notification sound
                    </Text>
                  </View>
                  <CustomSwitch
                    value={value}
                    onValueChange={e => {
                      setvalue(e);
                    }}
                  />
                </View>
              </View>
            )}
          </View>

          <Text
            style={{
              color: 'black',
              marginHorizontal: 8,
              fontFamily: Fonts.bold,
              marginTop: 40,
            }}>
            Services
          </Text>
          <View style={{margin: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderScreen')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                // elevation: 1,
                marginVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVGOrders} />
                <Text
                  style={{
                    color: 'black',
                    marginHorizontal: 8,
                    fontFamily: Fonts.regular,
                  }}>
                  Orders
                </Text>
              </View>
              <SvgXml xml={SVGLeftArrow2} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ShowPaymnentSceen')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                // elevation: 1,
                marginVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVGpayment} />
                <Text
                  style={{
                    color: 'black',
                    marginHorizontal: 8,
                    fontFamily: Fonts.regular,
                  }}>
                  Payment
                </Text>
              </View>
              <SvgXml xml={SVGLeftArrow2} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Gradient>
    </Container>
  );
}
