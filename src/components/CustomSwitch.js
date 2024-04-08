import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomSwitch = ({value, onValueChange}) => {
  const trackColor = value
    ? ['#0049E6', '#9C15F7', '#FF4CF8']
    : ['rgba(247, 246, 255,1)', 'rgba(247, 246, 255,1)']; // Change colors as per your preference

  const thumbPosition = value ? '80%' : '10%';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onValueChange(!value)}
      style={[styles.container, {width: 40, height: 20}]}>
      <LinearGradient
        colors={trackColor}
        style={[styles.track, {borderRadius: 10, paddingHorizontal: 6}]}>
        <View
          style={[
            styles.thumb,
            {
              left: thumbPosition,
              backgroundColor: value ? '#fff' : '#9C15F7',
            },
          ]}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: 'rgba(226, 240, 255, 0.5)', // Water color background
  },
  track: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 8,
    position: 'absolute',
    // top: 30,
    top: '51%',
    transform: [{translateY: -8}],
    zIndex: 1,
  },
});

export default CustomSwitch;
