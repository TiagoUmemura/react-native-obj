import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { View, StyleSheet } from "react-native";

const FloatButton = ({ onPressFloatButton }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPressFloatButton()}
        style={styles.ButtonStyle}
      >
        <Icon name="plus" size={18} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ButtonStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "#01a699",
    borderRadius: 100
  }
});

export default FloatButton;
