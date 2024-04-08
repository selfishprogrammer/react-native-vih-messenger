import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../HOC/Container';
import Gradient from '../../HOC/Gradiant';
import BlueHeader from '../../components/BlueHeader';
import {SvgXml} from 'react-native-svg';
import {
  SVGCentralBank,
  SVGChatCentral,
  SVGCross,
  SVGEmoji,
  SVGFile,
  SVGProfile,
  SVGProfile2,
  SVGSend,
  SVGSends,
  SVGVisa,
  SVGLeftArrow3,
  SVGMaster,
} from '../../constants/Images';
import Fonts from '../../constants/Fonts';
import GenericButton from '../../components/GenericButton';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  setBottomNavigation,
  setChats,
} from '../../redux/slices/authenticationSlice';
import EmojiPicker from 'rn-emoji-keyboard';
import ImageSelectionModal from '../../components/ImageSelectionModal';
import moment from 'moment';
import BlueHeader2 from '../../components/BlueHeader2';

export default function ChattingScreen() {
  const {chats} = useSelector(state => state.authenticationSlice);
  const [chat, setchat] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isOpen, setIsOpen] = useState(false);
  const [inputFieldTxt, setinputFieldTxt] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [images, setimages] = useState([]);

  useEffect(() => {
    if (isFocused) {
      console.log(chats, 'chahahahah');
      dispatch(setBottomNavigation(false));
    }
  }, []);
  const renderCardInfo = () => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(245, 246, 247, 1)',
          borderRadius: 8,
          maxWidth: '90%',
          elevation: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'left',
            fontFamily: Fonts.regular,
          }}>
          Sure we are happy to assits you:)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              handleMessage('Visa Card');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 8,
            }}>
            <SvgXml xml={SVGVisa} />
            <SvgXml xml={SVGLeftArrow3} style={{marginLeft: 20}} />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 20,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 8,
            }}>
            <SvgXml xml={SVGMaster} />
            <SvgXml xml={SVGLeftArrow3} style={{marginLeft: 20}} />
          </View>
        </View>
      </View>
    );
  };
  const handleMessage = e => {
    let arr = [];
    let obj = {};
    console.log(e, 'chats2');
    if (
      inputFieldTxt.toUpperCase().includes('CARD') ||
      inputFieldTxt.toUpperCase().includes('BLOCK')
    ) {
      obj = {
        text: inputFieldTxt,
        images: images,
        type: 'me',
        date: moment(new Date()).format('DD-MMM'),
      };
      arr.push(obj);
      obj = {
        text: 'Hello Please choose your card',
        images: images,
        type: 'Central Bank of India',
        date: moment(new Date()).format('DD-MMM'),
      };
    } else {
      obj = {
        text: inputFieldTxt === '' ? e : inputFieldTxt,
        images: images,
        type: 'me',
        date: moment(new Date()).format('DD-MMM'),
      };
    }
    arr.push(obj);
    dispatch(setChats([...chats, ...arr]));
    // setchat(...arr, ...chats);
    console.log(chats, 'chats');
    setinputFieldTxt('');
    setimages([]);
  };
  return (
    <Container
      noPadding={true}
      statusBarStyle="light"
      statusBarColor={'rgba(55, 2, 200, 1)'}
      backgroundColor={'rgba(255, 255, 255, 0.3)'}>
      <Gradient color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
        <EmojiPicker
          onEmojiSelected={e => setinputFieldTxt(inputFieldTxt + e.emoji)}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <ImageSelectionModal
          isVisible={isVisible}
          closeModal={() => setisVisible(false)}
          onConfirmCallBack={e => {
            setisVisible(false);
            console.log('imagesss', e);
            setimages([...e, ...images]);
          }}
        />
        <BlueHeader2 threeDot={true} title={'Vodafone'} />
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          {chats?.map((item, key) =>
            item.type === 'me' ? (
              <View
                key={key}
                style={{maxWidth: '70%', alignSelf: 'flex-end', padding: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <View style={{marginBottom: 15}}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'right',
                        fontFamily: Fonts.semibold,
                      }}>
                      You
                    </Text>
                    <Text
                      style={{
                        color: 'gray',
                        textAlign: 'right',
                        fontFamily: Fonts.regular,
                        fontSize: 10,
                        lineHeight: 10,
                      }}>
                      {`Sent ` + item?.date}
                    </Text>
                  </View>
                  <SvgXml xml={SVGProfile} width={60} height={60} />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    maxWidth: '90%',
                    elevation: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    {item?.images.map((i, k) => (
                      <Image
                        source={{uri: i?.data}}
                        width={item?.images.length > 1 ? 90 : 200}
                        height={item?.images.length > 1 ? 90 : 200}
                        style={{borderRadius: 10, margin: 5}}
                      />
                    ))}
                  </View>

                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'left',
                      fontFamily: Fonts.regular,
                      marginVertical: item?.images.length > 0 ? 10 : 0,
                      marginHorizontal: item?.images.length > 0 ? 10 : 0,
                    }}>
                    {item.text}
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{maxWidth: '70%', alignSelf: 'flex-start', padding: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    maxWidth: '70%',
                    alignSelf: 'flex-start',
                    marginBottom: 10,
                  }}>
                  <SvgXml xml={SVGCentralBank} width={60} height={60} />
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'left',
                        fontFamily: Fonts.semibold,
                      }}>
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        color: 'gray',
                        textAlign: 'left',
                        fontFamily: Fonts.regular,
                        fontSize: 10,
                        lineHeight: 10,
                      }}>
                      {`Sent ` + item?.date}
                    </Text>
                  </View>
                </View>
                {renderCardInfo()}
              </View>
            ),
          )}

          {/* <View style={{maxWidth: '70%', alignSelf: 'flex-end', padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                maxWidth: '70%',
                alignSelf: 'flex-end',
              }}>
              <View style={{marginBottom: 15}}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'right',
                    fontFamily: Fonts.semibold,
                  }}>
                  You
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    textAlign: 'right',
                    fontFamily: Fonts.regular,
                    fontSize: 10,
                    lineHeight: 10,
                  }}>
                  Sent 02 min ago
                </Text>
              </View>
              <SvgXml xml={SVGProfile} width={60} height={60} />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                elevation: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'left',
                  fontFamily: Fonts.regular,
                }}>
                I am facing a issue while adding the card need help urgently..
                on this i already had mupliple failure.
              </Text>
            </View>
          </View>
          <View style={{maxWidth: '70%', alignSelf: 'flex-end', padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                maxWidth: '70%',
                alignSelf: 'flex-end',
              }}>
              <View style={{marginBottom: 15}}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'right',
                    fontFamily: Fonts.semibold,
                  }}>
                  You
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    textAlign: 'right',
                    fontFamily: Fonts.regular,
                    fontSize: 10,
                    lineHeight: 10,
                  }}>
                  Sent 02 min ago
                </Text>
              </View>
              <SvgXml xml={SVGProfile} width={60} height={60} />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                elevation: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'left',
                  fontFamily: Fonts.regular,
                }}>
                I Want to block my debit card , it giving failure..
              </Text>
            </View>
          </View>
          <View style={{maxWidth: '70%', alignSelf: 'flex-start', padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                maxWidth: '70%',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              <SvgXml xml={SVGCentralBank} width={60} height={60} />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontFamily: Fonts.semibold,
                  }}>
                  Central Bank of India
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    textAlign: 'left',
                    fontFamily: Fonts.regular,
                    fontSize: 10,
                    lineHeight: 10,
                  }}>
                  Sent 02 min ago
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                elevation: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'left',
                  fontFamily: Fonts.regular,
                }}>
                Sure will try to help you out..
              </Text>
            </View>
          </View>  */}
        </ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 1,
            paddingHorizontal: 10,
            position: 'absolute',
            bottom: 15,
            width: '90%',
            alignSelf: 'center',
          }}>
          {images.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                alignSelf: 'center',
              }}>
              {images.map((i, k) => (
                <View
                  style={{
                    padding: 10,
                    // backgroundColor: 'red'
                  }}>
                  <View>
                    <SvgXml
                      xml={SVGCross}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 9999,
                      }}
                      onPress={() => {
                        let arr = images;
                        arr.splice(k, 1);
                        setimages([...arr]);
                      }}
                    />
                    <Image
                      key={k}
                      source={{
                        uri: i.data,
                      }}
                      style={{
                        width: 80,
                        height: 100,
                        borderRadius: 20,
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                </View>
              ))}
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Write anything here..."
              placeholderTextColor={'rgba(130, 130, 130, 1)'}
              value={inputFieldTxt}
              onChangeText={setinputFieldTxt}
              multiline
              style={{
                backgroundColor: 'transparent',
                width: '65%',
                height: 40,
                paddingBottom: 5,
                fontFamily: Fonts.regular,
                color: 'black',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={SVGEmoji}
                style={{marginHorizontal: 5}}
                onPress={() => setIsOpen(true)}
              />
              <SvgXml
                xml={SVGFile}
                style={{marginLeft: 5}}
                onPress={() => setisVisible(true)}
              />

              <SvgXml
                xml={SVGSends}
                style={{marginHorizontal: 5}}
                onPress={handleMessage}
              />
            </View>
          </View>
        </View>
      </Gradient>
    </Container>
  );
}
