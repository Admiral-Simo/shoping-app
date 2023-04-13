import { FlatList, StyleSheet, Text, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "./components/ListItem";

const data = new Array(20).fill(0).map((_, index) => ({ id: index }));

export default function App() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({item}) => <ListItem item={item} viewableItems={viewableItems} />}
      />
    </View>
  );
}
