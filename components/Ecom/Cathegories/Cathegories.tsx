import { FlatList } from "react-native";
import { useState } from "react";
import Cathegory from "./Cathegory";

interface CathegoriesI {
  cathegories: string[];
}

const Cathegories = ({ cathegories }: CathegoriesI) => {
  const [cathegoryIndex, setCathegoryIndex] = useState(0);
  return (
    <FlatList
      data={cathegories}
      horizontal
      renderItem={({ item, index }) => (
        <Cathegory item={item} index={index} cathegoryIndex={cathegoryIndex} changeActiveIndex={setCathegoryIndex} />
      )}
    />
  );
};

export default Cathegories;
