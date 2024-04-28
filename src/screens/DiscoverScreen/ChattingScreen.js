import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
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
  Voda,
  SVGArroplane,
  SVGVoda,
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
import useChannels from '../../hooks/useChaneels';
import useHandleImageColor from '../../hooks/useHandleImageColor';
import RenderHtml from 'react-native-render-html';
import {handleMessageAI} from '../../services/services';

export default function ChattingScreen() {
  const {chats} = useSelector(state => state.authenticationSlice);
  const [chat, setchat] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [inputFieldTxt, setinputFieldTxt] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [images, setimages] = useState([]);

  useEffect(() => {
    if (isFocused) {
      console.log(chats, 'chahahahah');
      dispatch(setBottomNavigation(false));
    }
  }, []);
  const renderCardInfo = item => {
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
            fontWeight: '400',
          }}>
          {item?.text}
        </Text>
      </View>
    );
  };
  const handleMessage = async e => {
    console.log(e, 'eeeeee');
    let arr = [];
    let obj = {};
    obj = {
      text: inputFieldTxt,
      images: images,
      type: 'me',
      date: moment(new Date()).format('DD-MMM'),
    };
    arr.push(obj);
    dispatch(setChats([...chats, ...arr]));
    console.log(chats, 'chats');
    setinputFieldTxt('');
    setimages([]);
    setisLoading(true);
    const data = await handleMessageAI(inputFieldTxt);
    console.log(data?.data?.data?.suggested_questions, 'dadaadadadadadad');

    if (data && data?.data.status) {
      obj = {
        text: data?.data?.data?.answer,
        type: 'Vodafone',
        date: moment(new Date()).format('DD-MMM'),
        suggestedProduct: data?.data?.data?.suggested_questions[0],
      };
      arr.push(obj);
      dispatch(setChats([...chats, ...arr]));
      console.log(chats, 'chats');
      setinputFieldTxt('');
      setimages([]);
    }
    setisLoading(false);
  };
  const handleMessage2 = async e => {
    console.log(e, 'eeeeee');
    let arr = [];
    let obj = {};
    obj = {
      text: e,
      images: images,
      type: 'me',
      date: moment(new Date()).format('DD-MMM'),
    };
    arr.push(obj);
    dispatch(setChats([...chats, ...arr]));
    console.log(chats, 'chats');

    setimages([]);
    setisLoading(true);
    const data = await handleMessageAI(e);
    console.log(data?.data?.data?.suggested_questions, 'dadaadadadadadad');

    if (data && data?.data.status) {
      obj = {
        text: data?.data?.data?.answer,
        type: 'Vodafone',
        date: moment(new Date()).format('DD-MMM'),
        suggestedProduct: data?.data?.data?.suggested_questions[0],
      };
      arr.push(obj);
      dispatch(setChats([...chats, ...arr]));
      console.log(chats, 'chats');
      setinputFieldTxt('');
      setimages([]);
    }
    setisLoading(false);
  };
  const channels = useChannels();
  const descHtml = {
    html: channels?.welcome_message,
  };

  const renderWelcomeMsg = () => {
    const {width} = useWindowDimensions();

    return (
      <View style={{marginHorizontal: 20, marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View>
            <Image
              source={Voda}
              width={20}
              height={20}
              style={{width: 40, height: 40}}
            />
            <View
              style={{
                padding: 6,
                borderRadius: 20,
                backgroundColor:
                  channels?.status === 'active' ? 'yellowgreen' : 'red',
                marginLeft: 10,
                position: 'absolute',
                right: 3,
                bottom: 0,
              }}
            />
          </View>
          <Text
            style={{
              color: 'black',
              textAlign: 'right',
              fontFamily: Fonts.semibold,
              fontWeight: '700',
              fontSize: 17,
              marginLeft: 10,
              color: channels?.style_primary_color,
            }}>
            Vodafone
          </Text>
        </View>
        <View
          style={{
            padding: 15,
            backgroundColor: 'white',
            elevation: 1,

            borderRadius: 20,
          }}>
          {<RenderHtml contentWidth={width} source={descHtml} />}
        </View>
      </View>
    );
  };
  return (
    <Container
      noPadding={true}
      statusBarStyle="light"
      statusBarColor={
        channels ? channels?.style_primary_color : 'rgba(55, 2, 200, 1)'
      }
      isImage={true}
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
        <BlueHeader2 threeDot={true} title={'Vodafone'} isLoading={isLoading} />
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          {renderWelcomeMsg()}
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
                  <View style={{marginBottom: 0}}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'right',
                        fontFamily: Fonts.semibold,
                        fontWeight: '800',
                        marginRight: 10,
                        marginBottom: 5,
                      }}>
                      You
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'right',
                        fontFamily: Fonts.regular,
                        fontWeight: '400',
                        fontSize: 10,
                        lineHeight: 10,
                        marginRight: 10,
                      }}>
                      {`Sent ` + item?.date}
                    </Text>
                  </View>
                  {channels ? (
                    <View
                      style={{
                        marginTop: 20,
                        marginRight: 10,
                        borderWidth: 3,
                        padding: 7,
                        borderColor: channels?.style_primary_color,
                        borderRadius: 30,
                        marginBottom: 10,
                      }}>
                      <Image
                        style={{width: 25, height: 25, resizeMode: 'contain'}}
                        source={{
                          uri: channels?.chat_boat_logo,
                        }}
                      />
                      <SvgXml
                        xml={useHandleImageColor(
                          SVGArroplane,
                          channels?.style_primary_color,
                        )}
                        style={{position: 'absolute', left: -13, top: 0}}
                      />
                    </View>
                  ) : (
                    <SvgXml xml={SVGProfile} width={60} height={60} />
                  )}
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
                      fontWeight: '400',
                      marginVertical: item?.images.length > 0 ? 10 : 0,
                      marginHorizontal: item?.images.length > 0 ? 10 : 0,
                    }}>
                    {item.text}
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{maxWidth: '90%', alignSelf: 'flex-start', padding: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    maxWidth: '70%',
                    alignSelf: 'flex-start',
                    marginBottom: 10,
                  }}>
                  <SvgXml xml={SVGVoda} width={60} height={60} />
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        color: channels?.style_primary_color,
                        textAlign: 'left',
                        fontFamily: Fonts.semibold,
                        fontWeight: '800',
                        marginBottom: 5,
                      }}>
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                        fontFamily: Fonts.regular,
                        fontWeight: '400',
                        fontSize: 10,
                        lineHeight: 10,
                      }}>
                      {`Sent ` + item?.date}
                    </Text>
                  </View>
                </View>
                {renderCardInfo(item)}
                {console.log(item?.suggestedProduct, 'tem?.suggestedProduct')}
                {item?.suggestedProduct?.map((i, k) => (
                  <TouchableOpacity
                    onPress={() => handleMessage2(i)}
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 6,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: channels?.style_primary_color,
                      maxWidth: '60%',
                      margin: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: channels?.style_primary_color,
                        fontFamily: Fonts.semibold,
                        fontWeight: '600',
                      }}>
                      {i}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ),
          )}
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
                fontWeight: '400',
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
                xml={
                  channels
                    ? useHandleImageColor(
                        SVGEmoji,
                        channels?.style_primary_color,
                      )
                    : SVGEmoji
                }
                style={{marginHorizontal: 5}}
                onPress={() => setIsOpen(true)}
              />
              <SvgXml
                xml={
                  channels
                    ? useHandleImageColor(
                        SVGFile,
                        channels?.style_primary_color,
                      )
                    : SVGFile
                }
                style={{marginLeft: 5}}
                onPress={() => setisVisible(true)}
              />

              <SvgXml
                xml={
                  channels
                    ? useHandleImageColor(
                        SVGSends,
                        channels?.style_primary_color,
                      )
                    : SVGSends
                }
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
