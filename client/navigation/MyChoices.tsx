import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyChoicesStackNavigationParamList } from "./navigationTypes";

import MyChoicesScreen from "../features/myChoices/screens/MyChoices";
import ChoiceDetails from "../features/myChoices/screens/ChoiceDetails";

import { Colors } from "../shared/constants/colors";

const Stack = createNativeStackNavigator<MyChoicesStackNavigationParamList>();

export default function MyChoices() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primaryText,
      }}
    >
      <Stack.Screen
        name="MyChoices"
        component={MyChoicesScreen}
        options={{ title: "My Choices" }}
      />
      <Stack.Screen
        name="ChoiceDetails"
        component={ChoiceDetails}
        options={({ route }) => ({ title: route.params.choice.title })}
      />
    </Stack.Navigator>
  );
}
