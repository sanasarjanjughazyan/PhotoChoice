import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Choice from "../../components/choise/Choise";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";
import * as ImagePicker from "expo-image-picker";
import Button from "../../components/ui/Button";
import OutlinedButton from "../../components/ui/OutlinedButton";

export default function AddChoice() {
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const navigation = useNavigation();

  const handleChooseImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      allowsMultipleSelection: false,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      index === 0 ? setImageOne(uri) : setImageTwo(uri);
    }
  };

  const handleCreate = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaOverlay>
      <View style={styles.root}>
        <ScrollView style={{ width: "100%" }} alwaysBounceVertical={false}>
          <View>
            <View style={styles.imagesContainer}>
              <Choice
                item={{ index: 0, imageUrl: imageOne }}
                onPress={handleChooseImage}
              />
              <Choice
                item={{ index: 1, imageUrl: imageTwo }}
                onPress={handleChooseImage}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button title="Create" onPress={handleCreate} />
          <OutlinedButton title="Cancle" onPress={handleCancel} />
        </View>
      </View>
    </SafeAreaOverlay>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    minHeight: 200,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 8,
  },
});
