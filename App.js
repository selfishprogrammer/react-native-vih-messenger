import {View, Text, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from './src/HOC/Container';
import Colors from './src/constants/Colors';
import Gradient from './src/HOC/Gradiant';
import {SvgXml} from 'react-native-svg';
import {SVGLogo} from './src/constants/Images';
import AppStack from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationSlide from './src/components/NavigationSlide';
import {useSelector} from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const {bottomNavigation} = useSelector(state => state.authenticationSlice);
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
          <AppStack />
          {bottomNavigation && <NavigationSlide />}
        </>
      )}
    </NavigationContainer>
  );
}
