import React from "react";

import { View, Text, Image } from "react-native";

export const ListView = ({ items }) => {
  return (
    <View>
      {items.map((product, index) => (
        <View key={index}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: product.img }}
            alt="Imagem"
          />
          <View>
            <Text>{product.nome}</Text>
            <Text>{product.descricao}</Text>
            <Text>{product.preco}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
