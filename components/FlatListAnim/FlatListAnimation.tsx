import { Dimensions, FlatList, ImageBackground, StatusBar, View } from "react-native";
import ListItem from "./ListItem";
import Animated from "react-native-reanimated";
import { useRef } from "react";

const { width, height } = Dimensions.get("screen");

const DATA = [...Array(30).keys()].map((_, i) => ({
  id: i,
  name: "simo",
  image:
    "https://drscdn.500px.org/photo/88195029/m%3D900/v2?sig=727ce32f415cfbee114e39912e6513685783723e9c7c91e5bfe2110891c12a83",
  jobTitle: "Web Developer",
  email: "personalsimoypo@gmail.com",
}));

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg";

const SPACING = 20;
const AVATAR_SIZE = 70;

export default function FlatListAnimation() {
  const scrollY = useRef(new Animated.Value(0)).current;


  return (
    <ImageBackground source={{ uri: BG_IMG }} blurRadius={32} style={{ flex: 1 }}>
      <View className='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10'  />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item }) => <ListItem {...item} scrollY={scrollY} />}
      />
    </ImageBackground>
  );
}
