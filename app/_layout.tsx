import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';

export default function Layout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{
          headerTintColor: '#fff'
        }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Home',
            }}
          />
          <Drawer.Screen
            name="factory/index"
            options={{
              drawerLabel: 'Factory Loads',
              title: 'Factory Loads',
            }}
          />
          <Drawer.Screen
            name="custom/index"
            options={{
              drawerLabel: 'Custom Loads',
              title: 'Custom Loads',
            }}
          />
          <Drawer.Screen
            name="components/index"
            options={{
              drawerLabel: 'Components',
              title: 'Components',
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
