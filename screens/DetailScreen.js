import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: item.fieldData.image.url }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>

      <Text
        style={{
          color: "#3c3939",
          backgroundColor: "#86bc25",
          borderRadius: 3,
          marginTop: 5,
          paddingHorizontal: 6, // beetje ruimte links/rechts
          paddingVertical: 2,
          alignSelf: "flex-start",
        }}
      >
        {new Date(item.fieldData.datum).toLocaleDateString("nl-BE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Text>

      <Text style={{ marginTop: 10 }}>{item.fieldData.intro}</Text>

      <Text style={{ marginTop: 15, lineHeight: 20 }}>
        {item.fieldData.inhoud
          ? item.fieldData.inhoud.replace(/<[^>]*>/g, "")
          : "Geen inhoud beschikbaar"}
      </Text>
    </ScrollView>
  );
}