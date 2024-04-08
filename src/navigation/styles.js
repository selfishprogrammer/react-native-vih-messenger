import {Dimensions, Platform} from 'react-native';
import Fonts from '../constants/Fonts';
const width = Dimensions.get('window').width;
export default {
  barStyle: {
    backgroundColor: '#fff',
    height: 80,
    // position: 'absolute',
    // overflow: 'hidden',

    paddingHorizontal: 60,
    width: width,
    // bottom: 0,
    // zIndex: 9999,
  },
  barTxt: {
    fontFamily: Fonts.medium,
    lineHeight: 15,
    fontSize: 12,
    marginTop: 3,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: 'green', // Change this to your active color
  },
};
