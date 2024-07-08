import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TabNavigationList,
  MyChoicesStackNavigationParamList,
} from "./utils/NavigationTypes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./constants/colors";
import { Sizes } from "./constants/constants";

import Choices from "./screens/choices/Choices";
import AddChoice from "./screens/choices/AddChoice";
import MyChoices from "./screens/user/MyChoices";
import ChoiceDetails from "./screens/user/ChoiceDetails";

const Tab = createMaterialBottomTabNavigator<TabNavigationList>();
const Stack = createNativeStackNavigator<MyChoicesStackNavigationParamList>();

const MyChoicesScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primaryText,
      }}
    >
      <Stack.Screen
        name="MyChoices"
        component={MyChoices}
        options={{ title: "My Choices" }}
      />
      <Stack.Screen
        name="ChoiceDetails"
        component={ChoiceDetails}
        options={({ route }) => ({ title: route.params.choice.title })}
      />
    </Stack.Navigator>
  );
};

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
