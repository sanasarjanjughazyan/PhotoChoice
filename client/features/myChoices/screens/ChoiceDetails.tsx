import { Text, StyleSheet } from "react-native";
import SafeAreaOverlay from "../../../shared/components/overlays/SafeAreaOverlay";

import { MyChoicesStackNavigationProps } from "../../../navigation/navigationTypes";

export default function ChoiceDetails({
  route,
}: MyChoicesStackNavigationProps<"ChoiceDetails">) {
  const choice = route.params.choice;

  return (
    <SafeAreaOverlay>
      <Text>{choice.title}</Text>
    </SafeAreaOverlay>
  );
}

const styles = StyleSheet.create({});
