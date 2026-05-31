import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";

export default function ProductCard({ item, skus }) {

  const sku = skus.find(
    (s) => s.id === item.fieldData["default-sku"]
  );

  return (
    <View style={styles.card}>
      
      <Image
        source={{
          uri:
            sku?.fieldData?.image?.url ||
            "https://via.placeholder.com/300",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {item.fieldData.name}
      </Text>

      <Text style={styles.intro}>
        € {sku?.price?.value ? sku.price.value / 100 : "Geen prijs"}
      </Text>

    </View>
  );
}