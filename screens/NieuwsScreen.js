import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import NewsCard from "../components/NewsCard";

export default function NieuwsScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a187372e300a789392b5df2/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setNews(data.items || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "#f2f2f2",
      }}
    >
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}