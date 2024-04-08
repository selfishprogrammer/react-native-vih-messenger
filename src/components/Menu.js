import * as React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Button, Menu, Divider, PaperProvider} from 'react-native-paper';
import Fonts from '../constants/Fonts';

const Menu2 = ({isVisible, closeModal, data, cfmCallBack}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={closeModal}
      animationType="slide">
      <Pressable style={styles.modalContainer} onPress={closeModal}>
        <View
          style={{
            position: 'absolute',
            top: 60,
            backgroundColor: '#fff',
            width: '40%',
            borderRadius: 10,
            // borderTopStartRadius: 10,
            padding: 25,
            // height: 200,
            right: 10,
          }}>
          {data?.length > 0 &&
            data?.map((i, k) => (
              <Text
                onPress={() => cfmCallBack(i.name)}
                key={k}
                style={{
                  fontSize: 14,
                  marginBottom: 15,
                  fontFamily: Fonts.medium,
                  color: 'black',
                }}>
                {i.name}
              </Text>
            ))}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Menu2;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    color: '#fff',
    textAlign: 'center',
  },
});
