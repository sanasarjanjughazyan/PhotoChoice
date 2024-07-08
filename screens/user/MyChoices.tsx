import { View, FlatList } from "react-native";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";
import MyChoiceItem from "../../components/choise/MyChoiceItem";
import { getChoices, MY_CHOISES } from "../../http/myChoices";
import { Choice } from "../../models/Choice";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function MyChoices() {
  const [myChoices, setMyChoices] = useState<Choice[]>([]);

  useFocusEffect(() => {
    setMyChoices(MY_CHOISES);
  });

  return (
    <SafeAreaOverlay>
      <FlatList
        alwaysBounceVertical={false}
        data={myChoices}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <MyChoiceItem choice={item} />}
      />
    </SafeAreaOverlay>
  );
}
