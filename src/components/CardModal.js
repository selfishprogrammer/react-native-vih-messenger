import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Fonts from '../constants/Fonts';
import Gradient from '../HOC/Gradiant';
import {SvgXml} from 'react-native-svg';
import {SVGMaster, SVGVisa} from '../constants/Images';

export default function CardModal({visible, closeModal}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={closeModal}
      animationType="slide">
      <Pressable style={styles.modalContainer}>
        <Gradient
          isBlue={false}
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            width: '100%',
            borderRadius: 10,
            // borderTopStartRadius: 10,
            padding: 25,
            height: 200,
          }}
          color={['#0049E6', '#FF4CF8']}>
          <Text style={styles.cntgText}>{'Select Card'}</Text>
          <TouchableOpacity
            onPress={() => closeModal({icon: SVGVisa, name: 'Visa Card'})}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <SvgXml xml={SVGVisa} />
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                marginHorizontal: 8,
                fontFamily: Fonts.semibold,
                fontWeight: '600',
              }}>
              Visa Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => closeModal({icon: SVGMaster, name: 'Master Card'})}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <SvgXml xml={SVGMaster} />
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                marginHorizontal: 8,
                fontFamily: Fonts.semibold,
                fontWeight: '600',
              }}>
              Master Card
            </Text>
          </TouchableOpacity>
        </Gradient>
      </Pressable>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 25,
    height: 500,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cntgText: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
});
