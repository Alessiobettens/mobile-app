import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";

export default function CampusDetailScreen({ route }) {
  const { item } = route.params;
  const [focusList, setFocusList] = useState([]);

  const focusName = focusList.find((f) => f.id === item.fieldData.focus)
    ?.fieldData?.name;

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a14490591ad6eaec8519231/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setFocusList(data.items || []));
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: item.fieldData.kleur || "#fff",
      }}
      contentContainerStyle={{
        padding: 20,
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
          paddingHorizontal: 8,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start", // ✅ FIX
          width: "100%",
        }}
      >
        <Text style={{ marginRight: 8 }}>📍</Text>

        <Text style={{ color: "#333", textAlign: "left" }}>
          {item.fieldData.adres}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: "#fff",
          paddingHorizontal: 12,
          paddingVertical: 5,
          borderRadius: 5,
          alignSelf: "flex-start", // ✅ SUPER BELANGRIJK
        }}
      >
        <Text style={{ color: "#333", fontWeight: "bold" }}>
          {focusName ?? "Geen focus"}
        </Text>
      </View>

      <Text style={{ marginTop: 10, lineHeight: 20, color: "#ffffff" }}>
        {item.fieldData["beschrijving-3"]?.replace(/<[^>]*>/g, "")}
      </Text>

      <Text style={{ marginTop: 10, fontStyle: "italic", color: "#555" }}>
        {item.fieldData["contact-info"]?.replace(/<[^>]*>/g, "")}
      </Text>
    </ScrollView>
  );
}
