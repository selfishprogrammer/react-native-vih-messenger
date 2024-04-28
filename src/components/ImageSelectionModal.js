import React from 'react';
import {
  Alert,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Fonts from '../constants/Fonts';
import {
  askCameraPremission,
  askMediaPremission,
  checkCameraPremission,
  checkMediaPremission,
} from '../Permission';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import GenericButton from './GenericButton';
export default function ImageSelectionModal({
  isVisible,
  closeModal,
  onConfirmCallBack,
}) {
  const MEDIA_SELECTION_LIST = ['Gallery', 'Camera'];
  var selectedImages = [];
  // const openCameras = () => {
  //   ImagePicker.openCamera({
  //     cropping: true,
  //     mediaType: 'any',
  //     // includeBase64: true,
  //     multiple: true,
  //   })
  //     .then(image => {
  //       selectedImages.push({
  //         data: image.path,
  //         mime: image.mime,
  //       });
  //       onConfirmCallBack(selectedImages);
  //     })
  //     .catch(e => console.log(e));
  // };

  // const chooseImages = () => {
  //   ImagePicker.openPicker({
  //     cropping: true,
  //     mediaType: 'any',
  //     // includeBase64: true,
  //     multiple: true,
  //   })
  //     .then(image => {
  //       console.log('images111', image);
  // if (image.length > 0) {
  //   image.map(i => selectedImages.push({data: i.path, mime: i.mime}));
  // }
  //       onConfirmCallBack(selectedImages);
  //     })
  //     .catch(e => console.log(e));
  // };
  const openCameras = async () => {
    console.log('cool');
    const options = {
      mediaType: 'mxied',
      selectionLimit: 0,
      noData: true,
    };

    await launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Image picker canceled');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        console.log('responce,response', response);
        if (response.assets.length > 0) {
          response.assets.map(i =>
            selectedImages.push({data: i.uri, mime: i.type, file: i.file}),
          );
        }
        onConfirmCallBack(selectedImages);
      }
    });
  };

  const chooseImages = () => {
    const options = {
      mediaType: 'mixed',
      selectionLimit: 0,
      noData: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Image picker canceled');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        console.log('resp', response);
        if (response.assets.length > 0) {
          console.log(response.assets, 'respaoaskamd');
          response.assets.map(i =>
            selectedImages.push({data: i.uri, mime: i.type, file: i.uri}),
          );
        }
        onConfirmCallBack(selectedImages);
      }
    });
  };
  const deniedAlert = (title, msg) => {
    Alert.alert(title, msg, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'Cancel',
      },
      {text: 'allow', onPress: () => this.goToAppSettings()},
    ]);
  };
  const checkCameraPermission = async () => {
    await checkCameraPremission()
      .then(res => {
        if (!res) {
          askCameraPremission()
            .then(hasPermission => {
              if (hasPermission === 'denied') {
                deniedAlert(
                  'Allow Camera Permission',
                  'Allow Camera Permission to Capture your Video/Images',
                );
              } else {
                openCameras();
              }
            })
            .catch(() => {
              // eslint-disable-next-line no-alert
              Alert.alert('error_perrmission');
            });
          return;
        } else {
          openCameras();
        }
      })
      .catch(() => Alert.alert('permission', 'error'));
  };

  const checkMediaLocation = async () => {
    await checkMediaPremission()
      .then(res => {
        if (res === false) {
          askMediaPremission()
            .then(hasPermission => {
              console.log('hasPermission', hasPermission);
              if (hasPermission === 'denied') {
                deniedAlert(
                  'Allow Media Permission',
                  'Allow Media Permission to Choose your Video/Images',
                );
              } else {
                chooseImages();
              }
            })
            .catch(() => {
              // eslint-disable-next-line no-alert
              Alert.alert('error_perrmission');
            });
        } else {
          chooseImages();
        }
      })
      .catch(() => Alert.alert('permission', 'error'));
  };
  const handleOptionSeleted = type => {
    if (type === 'Gallery') {
      chooseImages();
    } else {
      checkCameraPermission();
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      statusBarTranslucent
      onRequestClose={closeModal}>
      <Pressable onPress={closeModal} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalView2}>
            <View style={styles.lineView} />
            <Text style={styles.modalTitleTxt}>Upload Image</Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 40,
              }}>
              <View style={{marginHorizontal: 10, marginTop: 10}}>
                {MEDIA_SELECTION_LIST.map((i, k) => (
                  <GenericButton
                    title={i}
                    style={styles.btnSelection}
                    onPress={() => handleOptionSeleted(i)}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <Pressable onPress={closeModal} style={styles.btnPressable}>
            <Text style={styles.btnOpacity}>Cancel</Text>
          </Pressable>
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
    marginTop: 20,
    marginBottom: 10,
    color: '#262626',
    fontFamily: Fonts.medium,

    fontWeight: '400',
    fontSize: 17,
  },
  modalView2: {
    backgroundColor: '#fff',
    maxHeight: 400,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 40,
    marginVertical: 0,
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
    width: '95%',
    margin: 10,
    borderRadius: 40,
  },
  btnOpacity: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontWeight: '500',
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
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
});
