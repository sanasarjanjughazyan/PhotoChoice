import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/constants";

type OutlinedButtonProps = {
  title: string;
  onPress: () => void;
};

export default function OutlinedButton({
  title,
  onPress,
}: OutlinedButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    color: Colors.secondaryText,
    fontSize: Sizes.text,
  },
});
