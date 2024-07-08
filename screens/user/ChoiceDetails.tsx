import { Text, StyleSheet } from "react-native";
import { Choice } from "../../models/Choice";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";

type ChoiceDetailsProps = {
  choice: Choice;
};

export default function ChoiceDetails({ choice }: ChoiceDetailsProps) {
  return (
    <SafeAreaOverlay>
      <Text>choice.title</Text>
    </SafeAreaOverlay>
  );
}

const styles = StyleSheet.create({});
