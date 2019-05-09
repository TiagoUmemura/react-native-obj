import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image
} from "react-native";

import ImagePicker from "react-native-image-picker";

function PickImage({ pick }) {
  const [avatarSource, setAvatarSource] = useState(null);

  function selectPhotoTapped() {
    const options = {
      title: "Selecione uma imagem",
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, response => {
      switch (response) {
        case response.didCancel:
          console.log("User cancelled photo picker");
          break;
        case response.error:
          console.log("ImagePicker Error: ", response.error);
          break;
        case response.customButton:
          console.log("User tapped custom button: ", response.customButton);
          break;
        default:
          let source = { uri: response.uri };
          setAvatarSource(source);
          pick(source);
          break;
      }
    });
  }
  return (
    <TouchableOpacity
      onPress={() => selectPhotoTapped()}
      style={styles.container}
    >
      <View style={[styles.avatar, styles.avatarContainer]}>
        {avatarSource === null ? (
          <Text>Imagem</Text>
        ) : (
          <Image style={styles.avatar} source={avatarSource} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  avatarContainer: {
    borderColor: "gray",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

export default PickImage;
