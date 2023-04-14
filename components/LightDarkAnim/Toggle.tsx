import { View, Text, TouchableOpacity } from "react-native";
import {useEffect} from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ToggleI {
  state: boolean;
  toggle: () => void;
}

const WIDTH = 45;
const BALL_SIZE = 25;

const LEFT_BALL = WIDTH - BALL_SIZE;
const RIGHT_BALL = 0;

const Toggle = ({ state, toggle }: ToggleI) => {
  const right = useSharedValue(LEFT_BALL);

  const rStyles = useAnimatedStyle(() => ({
    right: withTiming(right.value),
  }));

  useEffect(() => {
    if (state) {
        right.value = RIGHT_BALL
    } else {
        right.value = LEFT_BALL;
    }
  }, [state])
  

  return (
    <TouchableOpacity
      onPress={toggle}
      className="bg-[#512E4C] relative h-5 rounded-full"
      style={{ width: WIDTH }}
    >
      <View
        className="bg-[#F475EF] rounded-full absolute"
        style={[{
            bottom: -3,
            height: BALL_SIZE,
            width: BALL_SIZE,
          },rStyles]}
      />
    </TouchableOpacity>
  );
};

export default Toggle;
