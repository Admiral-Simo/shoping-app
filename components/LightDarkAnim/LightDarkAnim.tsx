import { StatusBar } from "expo-status-bar";
import { View, Text, Switch } from "react-native";
import React from "react";
import useToggle from "../../hooks/useToggle";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const SWITCH_TRACK_COLOR = {
  true: "rgba(256, 0, 256, 0.2)",
  false: "rgba(0,0,0,0.1)",
};



const THEME = {
    dark: "rgb(102, 86, 13)",
    light: "rgb(255,255,255)",
};

const LightDarkAnim = () => {
  const [theme, toggleTheme] = useToggle();

  const progress = useDerivedValue(() => {
    return theme ? withTiming(1) : withTiming(0);
  }, [theme]);

  const bgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [THEME.light, THEME.dark]
    );

    return { backgroundColor };
  });

  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [THEME.dark, THEME.light]
    );

    return { backgroundColor };
  });
  const textStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [THEME.dark, THEME.light]
    );

    return { color };
  });

  return (
    <Animated.View style={bgStyle} className="flex-1 pt-40 bg-black">
      <StatusBar hidden />
      <Animated.Text
        style={textStyle}
        className="tracking-widest text-center text-7xl"
      >
        THEME
      </Animated.Text>
      <View className="items-center justify-center mt-10">
        <Animated.View
          className="items-center justify-center bg-black rounded-full h-52 w-52"
          style={circleStyle}
        >
          <Switch
            value={theme}
            onValueChange={toggleTheme}
            trackColor={SWITCH_TRACK_COLOR}
            thumbColor={"violet"}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default LightDarkAnim;
