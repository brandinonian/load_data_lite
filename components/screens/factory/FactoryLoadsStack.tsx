import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FactoryLoadsScreen from "./FactoryLoadsScreen";

export type FactoryLoadsStackParamList = {
  "Factory Loads": undefined;
  "New Factory Load": undefined;
  "Factory Load Details": { id: string };
};

const Stack = createNativeStackNavigator<FactoryLoadsStackParamList>();

export default function FactoryLoadsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Factory Loads" component={FactoryLoadsScreen} />
    </Stack.Navigator>
  );
}
