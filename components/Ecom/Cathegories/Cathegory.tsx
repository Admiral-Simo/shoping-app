import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

interface CathegoryI {
  item: string;
  index: number;
  cathegoryIndex: number;
  changeActiveIndex: (index: number) => void;
}

const Cathegory = ({
  item,
  index,
  cathegoryIndex,
  changeActiveIndex,
}: CathegoryI) => {
  const { colors } = useTheme();
  const isSelected = cathegoryIndex === index;
  return (
    <TouchableOpacity
      onPress={() => changeActiveIndex(index)}
      className="px-5 py-3 mr-2 rounded-full"
      style={{
        backgroundColor: isSelected ? colors.primary : colors.card,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <Text
        style={{
          color: isSelected ? colors.background : colors.text,
          opacity: isSelected ? 1 : 0.5,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Cathegory;
