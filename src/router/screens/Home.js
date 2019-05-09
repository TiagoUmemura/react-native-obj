import React, { useState, useEffect } from "react";

import { View, Text, Button, StyleSheet } from "react-native";

import { ListView } from "../../components/ListView";
import Firebase from "../../services/firebase";
import FloatButton from "../../components/FloatButton";
import SwipeList from "../../components/SwipeList";

const Home = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Firebase.getProducts(items => {
      setItems(items);
      setIsLoading(false);
    });
  }, items);

  const navigationDetails = produto => {
    navigation.navigate("ProductsDetails", { produto });
  };

  const deleteProduct = (async = ({ product_id }) => {
    Firebase.deleteProduct(product_id);
  });

  return (
    <View style={styles.container}>
      <SwipeList
        isLoading={isLoading}
        itemList={items}
        onPressNavigationDetails={product => navigationDetails(product)}
        onPressDeleteProduct={product => deleteProduct(product)}
      />

      <FloatButton
        onPressFloatButton={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});

Home.navigationOptions = {
  title: "Home"
};

export default Home;
