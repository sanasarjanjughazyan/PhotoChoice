import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Choice } from "../../../models/Choice";
import { Colors } from "../../../shared/constants/colors";
import { Sizes } from "../../../shared/constants/sizes";

type MyChoiceItemProps = {
  choice: Choice;
  onPress: (choice: Choice) => void;
};

export default function MyChoiceItem({ choice, onPress }: MyChoiceItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => onPress(choice)}
    >
      <Text style={styles.title}>{choice.title}</Text>
      <View style={styles.imagesContainer}>
        {choice.items.map((item) => (
          <Image
            key={item.imageUrl}
            source={{ uri: item.imageUrl }}
            style={styles.image}
          />
        ))}
      </View>
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
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 1 },
  },
  pressed: {
    opacity: 0.7,
  },
  imagesContainer: {
    flexDirection: "row",
    marginBottom: 8,
    overflow: "hidden",
    justifyContent: "space-evenly",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: Colors.secondary,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 8,
  },
  title: {
    fontSize: Sizes.subtitle,
    marginVertical: 8,
  },
});
