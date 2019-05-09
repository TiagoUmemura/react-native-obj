import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { TouchableOpacity } from "react-native";
import Firebase from "../../services/firebase";
import PickImage from "../../components/PickImage";

let addItem = async produto => {
  try {
    await Firebase.addProduct(produto);
  } catch (err) {
    console.log("Erro ao salvar o produto", err);
  }
};

let uploadImage = async ({ img }) => {
  if (img) {
    try {
      return await Firebase.uploadImage(img);
    } catch (err) {
      console.log("Erro ao salvar imagem", err);
    }
  }
};

export default class Home extends Component {
  static navigationOptions = {
    title: "Products"
  };

  state = {
    produto: {
      product_id: Math.random()
        .toString(36)
        .substring(7),
      nome: "",
      preco: "",
      descricao: "",
      img:
        "http://www.nsrcel.org/newsite/wp-content/uploads/2018/01/product.png"
    },
    isLoading: false
  };

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    let url = await uploadImage(this.state.produto);
    this.HandleImage(url);
    await addItem(this.state.produto);
    this.setState({ isLoading: false });
    this.props.navigation.navigate("Home");
  };

  pickImage = value => {
    this.HandleImage(value.uri);
  };

  HandleImage = value => {
    this.setState(prevState => ({
      produto: {
        ...prevState.produto,
        img: value
      }
    }));
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome"
          maxLenght={30}
          onChangeText={nome =>
            this.setState(prevState => ({
              produto: {
                ...prevState.produto,
                nome
              }
            }))
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Descrição"
          maxLenght={40}
          onChangeText={descricao =>
            this.setState(prevState => ({
              produto: {
                ...prevState.produto,
                descricao
              }
            }))
          }
        />
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Preço"
          maxLenght={6}
          onChangeText={preco =>
            this.setState(prevState => ({
              produto: {
                ...prevState.produto,
                preco
              }
            }))
          }
        />
        <PickImage pick={value => this.pickImage(value)} />
        <TouchableOpacity style={styles.saveButton} onPress={this.handleSubmit}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
        {this.state.isLoading && (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 15
  },
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 15
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#01a699",
    backgroundColor: "#01a699",
    padding: 15,
    marginTop: 15
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center"
  }
});
