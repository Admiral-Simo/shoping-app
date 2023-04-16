import {NavigatorScreenParams} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';


export interface RootStackParamList {
  TabStack: NavigatorScreenParams<TabsStackParamList>;
  Details: undefined;
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabStack" component={TabsNavigator} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
