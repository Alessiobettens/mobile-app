import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  const [categories, setCategories] = useState([]);

  const categoryNames = item.fieldData.categories?.map(
    (catId) => categories.find((c) => c.id === catId)?.fieldData?.name,
  );

  console.log(categories);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a187b2a40f45e63197acbea/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setCategories(data.items || []));
  }, []);
  console.log(item.fieldData);
  console.log(categoryNames);

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: item.fieldData.image.url }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>
      <Text style={{ marginTop: 10 }}>
        {categoryNames?.join(", ") || "Geen categorie"}
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
