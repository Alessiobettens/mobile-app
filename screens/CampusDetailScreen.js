import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

export default function CampusDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: item.fieldData.kleur || "#fff",
      }}
    >
      <Image
        source={{
          uri:
            item.fieldData.afbeelding?.url || "https://via.placeholder.com/300",
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 10,
          color: "#ffffff",
        }}
      >
        {item.fieldData.name}
      </Text>

      <View
        style={{
          backgroundColor: "#ffffff",
          marginTop: 10,
          paddingVertical: 8,
          paddingHorizontal: 30,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ marginRight: 20 }}>📍</Text>

        <Text style={{ color: "#333" }}>{item.fieldData.adres}</Text>
      </View>

      <Text style={{ marginTop: 10, color: "#fff" }}>
        Focus: {item.fieldData.focus}
      </Text>

      <Text style={{ marginTop: 10, lineHeight: 20, color: "#fff" }}>
        {item.fieldData["beschrijving-3"]?.replace(/<[^>]*>/g, "")}
      </Text>

      <Text style={{ marginTop: 15, fontStyle: "italic", color: "#555" }}>
        {item.fieldData["contact-info"]?.replace(/<[^>]*>/g, "")}
      </Text>
    </View>
  );
}
