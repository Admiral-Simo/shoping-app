import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useCallback, useRef } from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import Cathegories from "../components/Ecom/Cathegories/Cathegories";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Mansory from "../components/Ecom/Products/Masonry";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/Ecom/FilterModal/CustomBackdrop";

const CATHEGORIES = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Accessories 2",
  "Accessories 3",
];

const AVATAR_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6rHdhb-HpWoC8JKiBBOSv376q3Z49BvUxdwdpdAwvaLiuTH9sXEECwMyQ00dQxnAYFA&usqp=CAU";

const HomeScreen = () => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleClosePress = () => bottomSheetModalRef.current?.close();

  return (
    <GestureHandlerRootView>
      <ScrollView style={{ backgroundColor: colors.background }}>
        {/* Padding Purpose View */}
        <View className="p-5 space-y-5">
          {/* Header Section */}
          <View className="flex-row items-center gap-3">
            <Image
              className="w-12 h-12 rounded-full"
              source={{
                uri: AVATAR_URL,
              }}
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="text-lg font-bold" numberOfLines={1}>
                Hi, James 👋
              </Text>
              <Text className="text-xs text-gray-500">
                Discover fashion that suit your style
              </Text>
            </View>
            <TouchableOpacity
              className="items-center justify-center w-12 h-12 rounded-full"
              style={{ borderWidth: 1, borderColor: colors.border }}
            >
              <Icons name="notifications" size={24} />
            </TouchableOpacity>
          </View>
          {/* Search Section */}
          <View className="flex-row items-center gap-3 h-14">
            {/* Search */}
            <View
              style={{ borderWidth: 1, borderColor: colors.border }}
              className="flex-row items-center flex-1 h-full px-5 space-x-3 rounded-full"
            >
              <Icons
                name="search"
                size={24}
                color={colors.text}
                style={{ opacity: 0.5 }}
              />
              <TextInput placeholder="Search" style={{ color: colors.text }} />
            </View>
            <TouchableOpacity
              onPress={openFilterModal}
              className="items-center justify-center rounded-full w-14 h-14"
              style={{ backgroundColor: colors.primary }}
            >
              <Icons name="tune" size={24} color={colors.background} />
            </TouchableOpacity>
          </View>

          {/* Grid Collection View */}

          <View>
            {/* Title bar */}
            <View className="flex-row items-center justify-between mb-2">
              <Text
                className="text-xl font-bold"
                style={{ color: colors.text }}
              >
                New Collections
              </Text>
              <TouchableOpacity>
                <Text>See All</Text>
              </TouchableOpacity>
            </View>
            {/* Products */}
            <View className="flex-row h-52" style={{ gap: 12 }}>
              {/* Card */}
              <Card
                price={130}
                img="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <View className="flex-1" style={{ gap: 12 }}>
                <Card
                  price={120}
                  img="https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815"
                />
                <Card
                  price={100}
                  img="https://images.pexels.com/photos/11714914/pexels-photo-11714914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </View>
            </View>
          </View>

          {/* Cathegories Section */}
          <View>
            <Cathegories cathegories={CATHEGORIES} />
          </View>

          {/* MasonryList */}
          <Mansory
            data={[
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815",
                liked: true,
              },
              {
                name: "PUMA everyday simo",
                price: 120,
                img: "https://images.pexels.com/photos/11714914/pexels-photo-11714914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: true,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: false,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: false,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: true,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815",
                liked: true,
              },
              {
                name: "PUMA everyday simo",
                price: 120,
                img: "https://images.pexels.com/photos/11714914/pexels-photo-11714914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: true,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: false,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: false,
              },
              {
                name: "PUMA everyday simo",
                price: 3000,
                img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                liked: true,
              },
            ]}
          />
        </View>
      </ScrollView>
      <BottomSheetModal
        snapPoints={["75%"]}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => (
          <CustomBackdrop {...props} handleClosePress={handleClosePress} />
        )}
      >
        <Text>Modal</Text>
      </BottomSheetModal>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const Card = ({ price, img }: { price: number; img: string }) => {
  return (
    <View className="relative flex-1 overflow-hidden rounded-3xl">
      <Image
        source={{
          uri: img,
        }}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      {/* Price */}
      <View className="absolute overflow-hidden rounded-full top-3 left-3">
        <View className="relative w-full h-full p-2">
          <Text className="z-10 font-bold text-white">${price}</Text>
          <View
            style={StyleSheet.absoluteFill}
            className="bg-black opacity-30"
          />
        </View>
      </View>
    </View>
  );
};
