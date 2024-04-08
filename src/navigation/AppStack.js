import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import SettingScreen from '../screens/SettingsScreen/SettingScreen';
import {
  SVGChatActive,
  SVGChatInactive,
  SVGDiscoverActive,
  SVGDiscoverInactive,
  SVGInactiveSettings,
  SVGSettingsActive,
} from '../constants/Images';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import ProviderChatScreen from '../screens/ChatScreen/ProviderChatScreen';
import ChatBox from '../screens/DiscoverScreen/ChatBox';
import ChattingScreen from '../screens/DiscoverScreen/ChattingScreen';
import ShowPaymnentSceen from '../screens/PaymentScreen/ShowPaymnentSceen';
import AddPaymentScreen from '../screens/PaymentScreen/AddPaymentScreen';
import NewChatScreen from '../screens/ChatScreen/NewChatScreen';
import OrderScreen from '../screens/SettingsScreen/OrderScreen';
// const BottomTab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function AppStack() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <Stack.Navigator
      // animationEnabled={true}
      // animationTypeForReplace="pop"
      headerMode="none"
      initialRouteName="ProviderChatScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProviderChatScreen"
        component={ProviderChatScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ChattingScreen"
        component={ChattingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ChatScreen"
        component={ChatScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DiscoverScreen"
        component={DiscoverScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="SettingScreen"
        component={SettingScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ChatBox"
        component={ChatBox}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ShowPaymnentSceen"
        component={ShowPaymnentSceen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddPaymentScreen"
        component={AddPaymentScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="NewChatScreen"
        component={NewChatScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OrderScreen"
        component={OrderScreen}
      />
    </Stack.Navigator>
  );
}
