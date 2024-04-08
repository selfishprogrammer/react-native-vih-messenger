import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const CreditCard = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./credit_card_image.png')}
        style={styles.cardImage}
      /> */}
      <Svg width="100%" height="100%" viewBox="0 0 419 285" fill="none">
        <Path
          d="M373.391 26H45.6087C36.9883 26 30 32.8705 30 41.3457V234.701C30 243.176 36.9883 250.047 45.6087 250.047H373.391C382.012 250.047 389 243.176 389 234.701V41.3457C389 32.8705 382.012 26 373.391 26Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M80.3907 379.831C187.53 379.831 274.384 294.441 274.384 189.107C274.384 83.7722 187.53 -1.61816 80.3907 -1.61816C-26.7491 -1.61816 -113.603 83.7722 -113.603 189.107C-113.603 294.441 -26.7491 379.831 80.3907 379.831Z"
          fill="#1E1671"
        />
        <Path
          d="M380.083 166.303C437.963 166.303 484.884 120.172 484.884 63.2673C484.884 6.36243 437.963 -39.7681 380.083 -39.7681C322.203 -39.7681 275.282 6.36243 275.282 63.2673C275.282 120.172 322.203 166.303 380.083 166.303Z"
          fill="url(#paint1_linear)"
        />
        {/* Add other paths or shapes as needed */}
        {/* Define the linear gradients */}
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="132.125"
            y1="294.78"
            x2="224.716"
            y2="-66.4161"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#0049E6" />
            <Stop offset="0.49" stopColor="#9C15F7" />
            <Stop offset="1" stopColor="#FF4CF8" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="334.908"
            y1="207.446"
            x2="457.836"
            y2="-96.9578"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#0049E6" />
            <Stop offset="0.49" stopColor="#9C15F7" />
            <Stop offset="1" stopColor="#FF4CF8" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CreditCard;
