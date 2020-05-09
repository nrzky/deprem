import React, { useRef } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';

function Touchable(props) {
  const animation = useRef(new Animated.Value(1)).current;

  const animationStart = () => {
    Animated.timing(
      animation,
      {
        toValue: 1.10,
        duration: 100,
        useNativeDriver: true
      }
    ).start();
  }

  const animationStop = () => {
    Animated.timing(
      animation,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }
    ).start();
  }

  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: animation }] }}>
      <TouchableWithoutFeedback
        onPressIn={animationStart}
        onPressOut={animationStop}
        {...props}>
        {props.children}
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

export default Touchable;
