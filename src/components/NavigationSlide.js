import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  SVGChatActive,
  SVGChatInactive,
  SVGDiscoverActive,
  SVGDiscoverInactive,
  SVGInactiveSettings,
  SVGSettingsActive,
} from '../constants/Images';
import Fonts from '../constants/Fonts';
import LinearTextGradient from 'react-native-text-gradient';
import GradiantText from './GradiantText';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setActiveTab} from '../redux/slices/authenticationSlice';

export default function NavigationSlide() {
  const {activeTab} = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNavigation = tab => {
    let nav = 'DiscoverScreen';
    switch (tab) {
      case '1':
        nav = 'DiscoverScreen';
        break;
      case '2':
        nav = 'ProviderChatScreen';
        break;
      case '3':
        nav = 'SettingScreen';
        break;
    }
    dispatch(setActiveTab(tab));
    navigation.navigate(nav);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.subCont} onPress={() => handleNavigation('1')}>
        <SvgXml
          xml={activeTab === '1' ? SVGDiscoverActive : SVGDiscoverInactive}
        />
        {activeTab === '1' ? (
          <GradiantText
            style={{...styles.texts, fontFamily: Fonts.bold}}
            colors={[
              'rgba(108, 84, 230, 1)',
              'rgba(156, 21, 247, 1)',
              'rgba(108, 84, 230, 1)',
            ]}>
            Discover
          </GradiantText>
        ) : (
          <Text style={styles.texts}>Discover</Text>
        )}
      </Pressable>
      <Pressable style={styles.subCont} onPress={() => handleNavigation('2')}>
        <SvgXml xml={activeTab === '2' ? SVGChatActive : SVGChatInactive} />
        {activeTab === '2' ? (
          <GradiantText
            style={{...styles.texts, fontFamily: Fonts.bold}}
            colors={[
              'rgba(108, 84, 230, 1)',
              'rgba(156, 21, 247, 1)',
              'rgba(108, 84, 230, 1)',
            ]}>
            Chats
          </GradiantText>
        ) : (
          <Text style={styles.texts}>Chat</Text>
        )}
      </Pressable>
      <Pressable style={styles.subCont} onPress={() => handleNavigation('3')}>
        <SvgXml
          xml={activeTab === '3' ? SVGSettingsActive : SVGInactiveSettings}
        />
        {activeTab === '3' ? (
          <GradiantText
            style={{...styles.texts, fontFamily: Fonts.bold}}
            colors={['#0049E6', '#FF4CF8', '#9C15F7']}>
            Settings
          </GradiantText>
        ) : (
          <Text style={styles.texts}>Settings</Text>
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 40 : 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 0.5,
    borderWidth: 0,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 30,
  },
  subCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontFamily: Fonts.regular,
    color: 'rgba(130, 130, 130, 1)',
    marginLeft: 4,
  },
});
