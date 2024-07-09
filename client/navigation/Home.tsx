import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { TabNavigationList } from "./navigationTypes";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../shared/constants/colors";
import { Sizes } from "../shared/constants/sizes";

import MyChoicesScreens from "./MyChoices";
import Choices from "../features/choices/screens/Choices";
import AddChoice from "../features/addChoice/screens/AddChoice";

const Tab = createMaterialBottomTabNavigator<TabNavigationList>();

export default function Home() {
  return (
    <NavigationContainer>
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
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "albums" : "albums-outline"}
                color={color}
                size={Sizes.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyChoicesStack"
          component={MyChoicesScreens}
          options={{
            tabBarLabel: "My Choices",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                color={color}
                size={Sizes.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddChoice"
          component={AddChoice}
          options={{
            tabBarLabel: "Create",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                color={color}
                size={Sizes.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
