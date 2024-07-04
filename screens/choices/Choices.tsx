import { View, StyleSheet } from "react-native";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";
import Choice from "../../components/choise/Choise";

export default function Choices() {
  const handleMakeChoice = (id: string) => {
    console.log(id);
  };

  return (
    <SafeAreaOverlay style={styles.container}>
      <Choice
        onPress={handleMakeChoice}
        id="1"
        image="https://ae01.alicdn.com/kf/S532d9894112f4989a7909c914e30118f5.jpg_640x640Q90.jpg_.webp"
      />
      <Choice
        onPress={handleMakeChoice}
        id="2"
        image="https://pics.craiyon.com/2023-07-18/19ef5828a2504f81a55bdc39240e94ca.webp"
      />
    </SafeAreaOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
