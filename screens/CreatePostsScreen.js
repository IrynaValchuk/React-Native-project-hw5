import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { SubmitButton } from "../components/SubmitButton";

import { styles } from "../styles/CreatePostsScreen";

export const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const isButtonDisabled = !(title && location);

  const handlePublish = () => {
    console.log(`"title:" ${title}, "location:" ${location}`);
    setTitle("");
    setLocation("");
    navigation.navigate("Posts");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Image source={{}} style={styles.postImg} />
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={[styles.input, { fontFamily: "RobotoMedium" }]}
              value={title}
              onChangeText={handleTitleChange}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={[styles.input, { paddingLeft: 28 }]}
              value={location}
              onChangeText={handleLocationChange}
              placeholder="Локація..."
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity style={styles.locationIcon}>
              <Icon name="map-pin" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <SubmitButton
            text="Опублікувати"
            onPress={handlePublish}
            disabled={isButtonDisabled}
          />
          <TouchableOpacity style={styles.deleteBtn}>
            <Icon name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
