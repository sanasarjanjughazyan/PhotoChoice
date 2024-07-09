import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { MyChoicesStackNavigationProps } from "../../../navigation/navigationTypes";

import SafeAreaOverlay from "../../../shared/components/overlays/SafeAreaOverlay";
import MyChoiceItem from "../components/MyChoiceItem";

import { getChoices, MY_CHOISES } from "../../../http/myChoices";
import { Choice } from "../../../models/Choice";

export default function MyChoices({
  navigation,
}: MyChoicesStackNavigationProps<"MyChoices">) {
  const [myChoices, setMyChoices] = useState<Choice[]>([]);

  useFocusEffect(() => {
    setMyChoices(MY_CHOISES);
  });

  const handleSelectChoice = (choice: Choice) => {
    navigation.navigate("MyChoicesStack", {
      screen: "ChoiceDetails",
      params: { choice },
    });
  };

  return (
    <SafeAreaOverlay>
      <FlatList
        alwaysBounceVertical={false}
        data={myChoices}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <MyChoiceItem onPress={handleSelectChoice} choice={item} />
        )}
      />
    </SafeAreaOverlay>
  );
}
