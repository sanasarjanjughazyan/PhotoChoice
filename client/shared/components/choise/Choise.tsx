import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors } from "../../constants/colors";
import { Sizes } from "../../constants/sizes";
import { ChoiceItemWithIndex } from "../../../models/Choice";

type ChoiceProp = {
  item: ChoiceItemWithIndex;
  onPress: (index: number) => void;
  style?: StyleProp<ViewStyle>;
};

export default function Choice({ onPress, item, style }: ChoiceProp) {
  let content = <Text style={styles.fallbackTxt}>Choose a Photo</Text>;
  if (item.imageUrl) {
    content = <Image style={styles.image} source={{ uri: item.imageUrl }} />;
  }

  return (
    <Pressable
      onPress={() => onPress(item.index)}
      style={({ pressed }) => [
        styles.conatiner,
        pressed && styles.pressed,
        style,
      ]}
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
