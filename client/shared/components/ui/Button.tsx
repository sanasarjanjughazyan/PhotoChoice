import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
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
    backgroundColor: Colors.primary,
    width: "40%",
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    color: Colors.primaryText,
    fontSize: Sizes.text,
  },
});
