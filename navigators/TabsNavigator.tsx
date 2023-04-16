import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import LightDarkAnim from "../components/LightDarkAnim/LightDarkAnim";

export interface TabsStackParamList {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
        component={Example}
      />
      <Tab.Screen
        name="Payment"
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
        component={Example}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props} />;
          },
        }}
        component={LightDarkAnim}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;

const Example = () => {
  return (
    <View>
      <Text>lkjsdf</Text>
    </View>
  );
};
