import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function ProductCard({ item, navigation }) {
  const image = item.fieldData.afbeelding?.url;
  const price = item.fieldData.prijs;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { item })}
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: image || "https://via.placeholder.com/300",
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{item.fieldData.name}</Text>

        <Text style={styles.intro}>€ {price ?? "Geen prijs"}</Text>
      </View>
    </TouchableOpacity>
  );
}
