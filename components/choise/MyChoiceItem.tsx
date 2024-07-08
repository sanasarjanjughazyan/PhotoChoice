import { Pressable, StyleSheet, Text } from "react-native";
import { Choice } from "../../models/Choice";
import { Colors } from "../../constants/colors";

type MyChoiceItemProps = {
  choice: Choice;
};

export default function MyChoiceItem({ choice }: MyChoiceItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text>{choice.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  pressed: {
    opacity: 0.7,
  },
});
