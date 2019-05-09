import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import withLoadingScreen from "../hocs/withLoading";

const SwipeList = ({
  itemList,
  onPressNavigateDetails,
  onPressDeleteProduct
}) => (
  <View style={styles.container}>
    <SwipeListView
      useFlatList
      data={itemList}
      renderItem={data => (
        <TouchableHighlight
          onPress={() => onPressNavigateDetails(data.item)}
          style={styles.rowFront}
          underlayColor={"#AAA"}
        >
          <View style={styles.containerImg}>
            <Image source={{ uri: data.item.img }} style={styles.photo} />
            <View style={styles.container_text}>
              <Text>{data.item.nome}</Text>
              <Text>R$ {data.item.preco}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={(data, index) => index.toString()}
      renderHiddenItem={data => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={styles.backRightBtn}
            onPress={() => onPressDeleteProduct(data.item)}
          >
            <Image
              source={require("../../images/trash.png")}
              style={styles.trash}
            />
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  containerImg: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    elevation: 2
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 80
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    backgroundColor: "red",
    right: 0
  },
  trash: {
    height: 25,
    width: 25
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 30
  }
});

export default withLoadingScreen(SwipeList);
