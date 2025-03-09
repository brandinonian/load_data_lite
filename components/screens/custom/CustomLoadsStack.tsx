import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomLoadsScreen from "./CustomLoadsScreen";
import NewCustomLoadScreen from "./NewCustomLoadScreen";
import CustomLoadDetailsScreen from "./CustomLoadDetails";

export type CustomLoadsStackParamList = {
  "Custom Loads": undefined;
  "New Custom Load": undefined;
  "Custom Load Details": { id: string };
};

const Stack = createNativeStackNavigator<CustomLoadsStackParamList>();

export default function CustomLoadsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Custom Loads"
        component={CustomLoadsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="New Custom Load"
        component={NewCustomLoadScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Custom Load Details"
        component={CustomLoadDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
