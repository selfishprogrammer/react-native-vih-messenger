import {
  Alert,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fonts from '../constants/Fonts';
import React, {useEffect, useState} from 'react';
import GenericButton from './GenericButton';
import Header from './Header';
import InputFeild from './InputFeild';
import {SvgXml} from 'react-native-svg';
import {SVGLeftArrow2, SVGAirtel} from '../constants/Images';
import GradiantContent from '../HOC/GrandiantContent';
import Gradient from '../HOC/Gradiant';
import {SEARCH_CARD} from '../constants/MockData';
import {useIsFocused, useNavigation} from '@react-navigation/native';
export default function SearchModal({
  isVisible,
  closeModal,
  onConfirmCallBack,
}) {
  const [searchFile, setsearchFile] = useState('');
  const [filterSearch, setfilterSearch] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    setsearchFile('');
    setfilterSearch([]);
  }, [isVisible]);

  const handleChange = e => {
    setsearchFile(e);
    if (e.length > 0) {
      const arr = SEARCH_CARD.filter(i => {
        return i?.name?.toUpperCase().includes(e.toUpperCase());
      });
      setfilterSearch(arr);
    } else {
      setfilterSearch([]);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      statusBarTranslucent
      onRequestClose={closeModal}>
      <Pressable style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalView2}>
            <InputFeild
              palceholder={'Search anything here .....'}
              value={searchFile}
              onChange={e => handleChange(e)}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{}}>
              {filterSearch.length > 0 &&
                filterSearch.map((i, k) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ChattingScreen');
                      closeModal();
                    }}
                    key={k}
                    // color={['#0049E6', '#9C15F7', '#FF4CF8']}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'rgba(247, 246, 255, 1)',
                      margin: 5,
                      //   borderWidth: 1,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={i?.icon} width={40} height={40} />
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontFamily: Fonts.bold,
                            fontSize: 16,
                          }}>
                          {i?.name}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontFamily: Fonts.regular,
                            fontSize: 10,
                            lineHeight: 10,
                          }}>
                          {i.text ?? i.description}
                        </Text>
                      </View>
                    </View>
                    <SvgXml xml={SVGLeftArrow2} />
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
    // elevation: 5,
  },
  modalTitleTxt: {
    alignSelf: 'center',
    // marginTop: 20,
    marginBottom: 10,
    color: '#262626',
    fontFamily: Fonts.medium,
    fontSize: 17,
  },
  modalView2: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    // marginHorizontal: 10,
    borderRadius: 40,
    marginVertical: 0,
    paddingHorizontal: 10,
  },
  lineView: {
    alignSelf: 'center',
    borderRadius: 4,
    padding: 3,
    marginTop: 10,
    width: '20%',
    backgroundColor: '#999999',
  },
  btnPressable: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    margin: 10,
    borderRadius: 40,
  },
  btnOpacity: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: 'red',
  },
  btnSelection: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 8,
    borderRadius: 20,
  },
  btnTxt: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: '#fff',
  },
});
