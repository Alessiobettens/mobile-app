import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a187372e300a789392b5df2/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => setNews(data.items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.fieldData.name}
            </Text>
            <Text>{item.fieldData.intro}</Text>
          </View>
        )}
      />
    </View>
  );
}
