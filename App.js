import {View, Text, LogBox, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from './src/HOC/Container';
import Colors from './src/constants/Colors';
import Gradient from './src/HOC/Gradiant';
import {SvgXml} from 'react-native-svg';
import {SVGCr} from './src/constants/Images';
import AppStack from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationSlide from './src/components/NavigationSlide';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import {fetchChannel} from './src/services/services';
import {setChannels} from './src/redux/slices/authenticationSlice';
import useChannels from './src/hooks/useChaneels';
import useHandleImageColor from './src/hooks/useHandleImageColor';

export default function App({hashCode, onClose}) {
  const {bottomNavigation, closeSDK} = useSelector(
    state => state.authenticationSlice,
  );
  const [launch, setlaunch] = useState(true);
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  useEffect(() => {
    setTimeout(() => {
      setlaunch(false);
    }, 2000);
  }, []);
  useEffect(() => {
    // onClose(closeSDK);
    fetchHashCodeInApplication();
  }, []);
  const dispatch = useDispatch();
  const fetchHashCodeInApplication = async () => {
    const data = await fetchChannel(hashCode);
    console.log('data', data);
    if (data && Object.values(data?.data).length > 0) {
      console.log('data?.data', data?.data);
      dispatch(setChannels(data?.data));
    }
  };
  const channels = useChannels();
  return (
    // {/* <Gradient
    //   style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
    //   color={['rgba(255, 255, 255, 1)', 'rgba(156, 21, 247, 0.1)']}>
    //   <SvgXml xml={SVGLogo} />
    // </Gradient> */}
    <NavigationContainer>
      {launch ? (
        <SplashScreen />
      ) : (
        <>
          <AppStack onClose={onClose} />
          {bottomNavigation && <NavigationSlide />}
          {
            <TouchableOpacity
              onPress={() => onClose(false)}
              style={styles.container}>
              <SvgXml
                xml={
                  channels
                    ? useHandleImageColor(SVGCr, channels?.style_primary_color)
                    : SVGCr
                }
                width={40}
                height={40}
              />
            </TouchableOpacity>
          }
        </>
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    bottom: 100,
    right: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 30,
  },
});
