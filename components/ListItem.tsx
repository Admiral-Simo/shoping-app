import { View, Text, ViewToken } from "react-native";
import React from "react";
import Animated, {
  SlideInLeft,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem = ({ viewableItems, item }: ListItemProps) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItems) => viewableItems.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.8) }],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 80,
          width: "90%",
          backgroundColor: "#6CC3CD",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 15,
        },
        rStyle,
      ]}
    />
  );
};

export default ListItem;
