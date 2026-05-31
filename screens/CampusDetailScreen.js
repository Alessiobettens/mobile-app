import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

export default function CampusDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{
          uri:
            item.fieldData.afbeelding?.url || "https://via.placeholder.com/300",
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>

      <Text style={{ marginTop: 5 }}>{item.fieldData.adres}</Text>

      <Text style={{ marginTop: 10 }}>Focus: {item.fieldData.focus}</Text>

      <Text style={{ marginTop: 10, lineHeight: 20 }}>
        {item.fieldData["beschrijving-3"]?.replace(/<[^>]*>/g, "")}
      </Text>

        <Text style={{ marginTop: 15, fontStyle: "italic", color: "#555" }}>
          {item.fieldData["contact-info"]?.replace(/<[^>]*>/g, "")}
        </Text>
    </View>
  );
}