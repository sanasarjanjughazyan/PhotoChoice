import { Pressable, StyleSheet, Image } from "react-native";
import { Colors } from "../../constants/colors";

type ChoiceProp = {
  image: string;
  id: string;
  onPress: (id: string) => void;
};

export default function Choice({ onPress, id, image }: ChoiceProp) {
  return (
    <Pressable
      onPress={() => onPress(id)}
      style={({ pressed }) => [styles.conatiner, pressed && styles.pressed]}
    >
      <Image style={styles.image} source={{ uri: image }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: Colors.secondaryBackground,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.7,
  },
});
