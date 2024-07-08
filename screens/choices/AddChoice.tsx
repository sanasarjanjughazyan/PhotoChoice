import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import Choice from "../../components/choise/Choise";
import SafeAreaOverlay from "../../components/overlays/SafeAreaOverlay";
import * as ImagePicker from "expo-image-picker";
import Button from "../../components/ui/Button";
import OutlinedButton from "../../components/ui/OutlinedButton";
import { addChoice } from "../../http/myChoices";
import { Colors } from "../../constants/colors";
import type * as Types from "../../utils/types";

export default function AddChoice() {
  const [images, setImages] = useState<Types.ImageData[]>([
    { isValid: true, imageUrl: "" },
    { isValid: true, imageUrl: "" },
  ]);
  const [title, setTitle] = useState("");

  const navigation = useNavigation();

  const handleChooseImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      allowsMultipleSelection: false,
    });

    let newImageData = { imageUrl: "", isValid: false };
    if (!result.canceled) {
      newImageData = { imageUrl: result.assets[0].uri, isValid: true };
    }

    setImages((prev) => {
      const data = [...prev];
      data[index] = newImageData;
      return data;
    });
  };

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const validate = () => {
    let isValid = images.every((imageData) => imageData.isValid);
    isValid = isValid && title.trim().length > 0;
    return isValid;
  };

  const handleCreate = () => {
    if (!validate()) {
      // TODO: customize alert
      Alert.alert("Validation Error", "Please check all failed input data");
      return;
    }
    const items: Types.Images = images;
    addChoice({ items, title });
    navigation.navigate("MyChoicesStack", { screen: "MyChoices" });
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
              {images.map((imageData, index) => (
                <Choice
                  key={index}
                  item={{ index, imageUrl: imageData.imageUrl }}
                  onPress={handleChooseImage}
                  style={!imageData.isValid && styles.imageError}
                />
              ))}
            </View>
            <TextInput
              autoCapitalize="sentences"
              autoCorrect={true}
              style={styles.textInput}
              placeholder="Title"
              value={title}
              onChangeText={handleChangeTitle}
            />
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
    padding: 8,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  imageError: {
    borderColor: Colors.accent,
  },
  textInput: {
    color: Colors.primaryText,
    borderColor: Colors.secondaryBackground,
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    height: 50,
    padding: 8,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 8,
  },
});
