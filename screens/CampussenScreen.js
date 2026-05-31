import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

export default function CampussenScreen({ navigation }) {
  const [campussen, setCampussen] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a144846d533bf59fe87ca4b/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setCampussen(data.items || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#f2f2f2" }}
    >
      <FlatList
        data={campussen}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CampusDetail", { item })}
          >
            <View
              style={{
                marginBottom: 20,
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
              }}
            >
              <Image
                source={{
                  uri:
                    item.fieldData.afbeelding?.url ||
                    "https://via.placeholder.com/300",
                }}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
              />

              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                {item.fieldData.name}
              </Text>

              <Text style={{ color: "#555", marginTop: 5 }}>
                {item.fieldData.adres}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}