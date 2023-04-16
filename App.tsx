import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { BottomSheetProvider } from "@gorhom/bottom-sheet/lib/typescript/contexts";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App = () => {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#f5f5f5",
        text: "#191919",
        border: "#d9d9d9",
        primary: "#191919",
      },
    }),
    []
  );
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <RootNavigator />
          <StatusBar style="dark" backgroundColor={theme.colors.background} />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
