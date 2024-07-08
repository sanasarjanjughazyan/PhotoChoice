import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";
import Choice from "../../components/choise/Choise";
import { getChoice } from "../../http/choises";
import { Choice as ChoiceModel } from "../../models/Choice";

export default function Choices() {
  const [currentChoice, setCurrentChoice] = useState<ChoiceModel>();

  const getNewChoice = async () => {
    const choice = await getChoice();
    setCurrentChoice(choice);
  };

  useEffect(() => {
    getNewChoice();
  }, []);

  const handleMakeChoice = async (index: number) => {
    await getNewChoice();
  };

  return (
    <SafeAreaOverlay style={styles.container}>
      {currentChoice?.items.map((item, index) => (
        <Choice
          key={index}
          onPress={handleMakeChoice}
          item={{
            index,
            imageUrl: item.imageUrl,
          }}
        />
      ))}
    </SafeAreaOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
