import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";

export default function ProductCard({ item }) {
  const image = item.fieldData.afbeelding?.url;
  const price = item.fieldData.prijs;

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image || "https://via.placeholder.com/300",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{item.fieldData.name}</Text>

      <Text style={styles.intro}>€ {price ?? "Geen prijs"}</Text>
    </View>
  );
}
