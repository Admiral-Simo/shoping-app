import { View, Text, ViewToken, Image } from "react-native";
import React from "react";
import Animated, {
  SlideInLeft,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface ListItemProps {
  scrollY: any;
  id: number;
  name: string;
  image: string;
  jobTitle: string;
  email: string;
}

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ListItem = ({
  id,
  scrollY,
  name,
  image,
  jobTitle,
  email,
}: ListItemProps) => {
  const inputRange = [-1 , 0, ITEM_SIZE * id, ITEM_SIZE * (id + 2)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View
      className="z-10 flex-row bg-white shadow-sm opacity-80 rounded-xl"
      style={{
        padding: SPACING,
        marginBottom: SPACING,
        transform: [{ scale }],
      }}
    >
      <Image
        style={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          marginRight: SPACING / 2,
        }}
        className="rounded-full"
        source={{ uri: image }}
      />
      <View>
        <Text className="text-xl font-bold">{name}</Text>
        <Text className="text-base opacity-70">{jobTitle}</Text>
        <Text className="text-sm opacity-80 text-[#0099cc]">{email}</Text>
      </View>
    </Animated.View>
  );
};

export default ListItem;
