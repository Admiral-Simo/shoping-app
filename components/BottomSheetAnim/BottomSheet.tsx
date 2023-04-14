import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const BottomSheet = () => {
  const { width, height } = useWindowDimensions();

  const [opened, setOpened] = useState(false);

  const top = useSharedValue(height);

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, ctx) {
      ctx.startTop = top.value;
    },
    onActive(event, ctx) {
      top.value = event.translationY + ctx.startTop;
    },
    onEnd(_, ctx) {
      if (top.value > 3 * (height / 4)) {
        top.value = withSpring(height);
      } else {
        top.value = withSpring(height / 2, SPRING_CONFIG);
      }
    },
  });

  const rStyles = useAnimatedStyle(() => ({
    top: top.value,
  }));

  const openSheet = () => {
    if (!opened) {
      top.value = withSpring(height / 2, SPRING_CONFIG);
    } else {
      top.value = withTiming(height);
    }
    setOpened((prev) => !prev);
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="items-center justify-center flex-1">
        <TouchableOpacity
          onPress={openSheet}
          className="px-5 py-2 bg-purple-300 rounded-lg"
        >
          <Text>Open Sheet</Text>
        </TouchableOpacity>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[rStyles]}
          className="absolute bottom-0 left-0 right-0 items-center justify-center p-5 bg-yellow-400 shadow-sm rounded-t-[40px]"
        >
          <Text>Sheet</Text>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default BottomSheet;
