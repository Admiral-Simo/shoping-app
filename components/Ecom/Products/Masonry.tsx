import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MasonryList from "reanimated-masonry-list";
import ProductItem from "./ProductItem";

interface MansoryI {
  data: { name: string; price: number; img: string; liked: boolean; }[];
}

const Masonry = ({ data }: MansoryI) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(item): string => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }) => (
        // @ts-ignore MansoryList is not giving the right type
        <ProductItem item={item} i={i} />
      )}
      onEndReachedThreshold={0.1}
    />
  );
};

export default Masonry;
