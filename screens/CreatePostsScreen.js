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
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import { SubmitButton } from "../components/SubmitButton";

import { styles } from "../styles/CreatePostsScreen";

export const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleTakePhoto = async () => {
    const { uri } = await cameraRef.takePictureAsync();
    setPhoto(uri);
  };

  const isButtonDisabled = !(title && location);

  const handlePublish = () => {
    console.log(`"title:" ${title}, "location:" ${location}`);
    setTitle("");
    setLocation("");
    setPhoto("");
    navigation.navigate("Posts");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              // type={type}
              ref={setCameraRef}
            >
              {photo && (
                <View style={styles.previewPhoto}>
                  <Image
                    source={{ uri: photo }}
                    style={{ height: 240, width: "100%" }}
                  />
                </View>
              )}
              {/* <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Icon name="refresh-cw" size={24} color="#BDBDBD" />
              </TouchableOpacity> */}
              <TouchableOpacity
                style={[
                  styles.takePhoto,
                  {
                    backgroundColor: photo
                      ? "rgba(255, 255, 255, 0.3)"
                      : "#FFFFFF",
                  },
                ]}
                onPress={handleTakePhoto}
              >
                <Icon
                  name="camera"
                  size={24}
                  color={photo ? "#FFFFFF" : "#BDBDBD"}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </Camera>
          </View>
          {photo ? (
            <Text style={styles.text}>Редагувати фото</Text>
          ) : (
            <Text style={styles.text}>Завантажте фото</Text>
          )}
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
