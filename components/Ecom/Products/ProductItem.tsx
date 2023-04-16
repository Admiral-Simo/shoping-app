import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import CommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

interface ProductItemI {
  item: { name: string; price: number; img: string };
  i: number;
}

const ProductItem = ({ item, i }: ProductItemI) => {
  return (
    <View
      style={{ aspectRatio: i === 0 ? 1 : 2 / 3 }}
      className="relative px-2 py-3 mt-2 overflow-hidden rounded-3xl"
    >
      <Image
        source={{
          uri: item.img,
        }}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <View className="z-10 flex-row w-full">
        <View className="flex-1">
          <Text className="text-xs capitalize">{item.name}</Text>
        </View>
        <TouchableOpacity className="items-center justify-center w-8 h-8 bg-white rounded-full">
          <CommunityIcons
            name={item.liked ? "cards-heart" : "cards-heart-outline"}
            size={18}
            color={item.liked ? "#ff000094" : "#000000"}
          />
        </TouchableOpacity>
      </View>

      <View className="flex-1" />

      <ImageBackground
        source={{ uri: item.img }}
        blurRadius={32}
        className="z-10 flex-row items-center justify-between px-2 py-1 overflow-hidden bg-black rounded-full"
      >
        <Text className="font-bold text-white">${item.price}</Text>
        <TouchableOpacity className="px-3 py-2 bg-white rounded-full">
          <Entypo name="shop" size={18} />
        </TouchableOpacity>
      </ImageBackground>

      {/* Absolute linear */}
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(255, 255, 255, 0.527)", "transparent"]}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

export default ProductItem;
