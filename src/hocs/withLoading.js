import * as React from "react";
import { View, ActivityIndicator, Modal, StyleSheet } from "react-native";

const withLoading = WrappedComponent => ({ isLoading, ...props }) => {
  if (isLoading) {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="green" />
          </View>
        </Modal>
      </View>
    );
  }
  {
    return <WrappedComponent {...props} />;
  }
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withLoading;
