import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function ProductDetailScreen({ route }) {
  const { item } = route.params;

  const image = item.fieldData.afbeelding?.url;
  const price = item.fieldData.prijs;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: image || "https://via.placeholder.com/300" }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
        resizeMode="contain"
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>

      <Text style={{ marginTop: 5, fontSize: 18 }}>€ {price}</Text>

      <Text style={{ marginTop: 10 }}>
        {item.fieldData.description || "Geen beschrijving"}
      </Text>
    </ScrollView>
  );
}
