import { Pressable, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../constants/colors";
import { ChoiceItem } from "../../models/Choice";
import { Sizes } from "../../constants/constants";

type ChoiceProp = {
  item: ChoiceItem;
  onPress: (index: number) => void;
};

export default function Choice({ onPress, item }: ChoiceProp) {
  let content = <Text style={styles.fallbackTxt}>Choose a Photo</Text>;
  if (item.imageUrl) {
    content = <Image style={styles.image} source={{ uri: item.imageUrl }} />;
  }

  return (
    <Pressable
      onPress={() => onPress(item.index)}
      style={({ pressed }) => [styles.conatiner, pressed && styles.pressed]}
    >
      {content}
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.7,
  },
  fallbackTxt: {
    color: Colors.accent,
    fontSize: Sizes.text,
  },
});
