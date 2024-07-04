import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { TabNavigationProps } from "./utils/NavigationTypes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./constants/colors";
import { Sizes } from "./constants/constants";

import Choices from "./screens/choices/Choices";
import AddChoice from "./screens/choices/AddChoice";

const Tab = createMaterialBottomTabNavigator<TabNavigationProps>();

export default function App() {
  const BottomTabScreens = () => {
    return (
      <Tab.Navigator
        activeColor={Colors.primary}
        barStyle={{ backgroundColor: Colors.secondaryBackground }}
        screenOptions={{}}
      >
        <Tab.Screen
          name="Choices"
          component={Choices}
          options={{
            tabBarLabel: "Browse",
            tabBarIcon: ({ color }) => (
              <Ionicons name="albums" color={color} size={Sizes.icon} />
            ),
          }}
        />
        <Tab.Screen
          name="AddChoice"
          component={AddChoice}
          options={{
            tabBarLabel: "Create",
            tabBarIcon: ({ color }) => (
              <Ionicons name="add" color={color} size={Sizes.icon} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>{BottomTabScreens()}</NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
