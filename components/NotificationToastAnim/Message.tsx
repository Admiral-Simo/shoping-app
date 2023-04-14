import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface MessageI {
  message: string;
  deleteMessage: (message: string) => void;
}

const Message = ({ message, deleteMessage }: MessageI) => {
  const opacity = useSharedValue(0);

  const rStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: interpolate(opacity.value, [0, 1], [-20, 0]) }],
  }));

  useEffect(() => {
    opacity.value = withSequence(withTiming(1), withDelay(2000, withTiming(0,{}, () => runOnJS(deleteMessage)(message))));
  }, []);

  return (
    <Animated.View
      style={rStyles}
      className="p-5 m-5 mb-2 bg-white rounded-lg shadow-sm"
    >
      <Text>{message}</Text>
    </Animated.View>
  );
};

export default Message;
