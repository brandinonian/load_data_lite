import "./gesture-handler.native";
import CustomLoadsScreen from "./components/screens/custom/CustomLoadsScreen";
import { SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";
import Fallback from "./components/ui/Fallback";
import { InitDB } from "./db/init";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomLoadsStack from "./components/screens/custom/CustomLoadsStack";
import FactoryLoadsStack from "./components/screens/factory/FactoryLoadsStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Suspense fallback={Fallback()}>
      <SQLiteProvider databaseName="loads.db" onInit={InitDB} useSuspense>
        <NavigationContainer>
          <MainDrawer />
        </NavigationContainer>
      </SQLiteProvider>
    </Suspense>
  );
}

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Custom Loads Stack" component={CustomLoadsStack} />
      <Drawer.Screen name="Factory Loads Stack" component={FactoryLoadsStack} />
    </Drawer.Navigator>
  );
}
