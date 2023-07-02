import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingRight: 16,
    paddingLeft: 16,
  },
  cameraContainer: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  camera: {
    flex: 1,
    height: 240,
    justifyContent: "center",
  },
  previewPhoto: {
    flex: 1,
  },
  takePhoto: {
    alignSelf: "center",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    marginBottom: 32,
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputWrap: {
    gap: 16,
    width: "100%",
    marginBottom: 16,
  },
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
  },
  locationIcon: {
    position: "absolute",
    top: "61%",
  },
  deleteBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    paddingTop: 8,
    paddingRight: 23,
    paddingBottom: 8,
    paddingLeft: 23,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
