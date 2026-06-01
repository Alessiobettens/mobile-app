import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductenScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("nameAsc");

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a04927dcf62d2e49fcf7e28/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.items || []))
      .catch((err) => console.error(err));
  }, []);

  // ✅ SORTERING
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "priceAsc") {
      return a.fieldData.prijs - b.fieldData.prijs;
    }

    if (sortType === "priceDesc") {
      return b.fieldData.prijs - a.fieldData.prijs;
    }

    if (sortType === "nameAsc") {
      return a.fieldData.name.localeCompare(b.fieldData.name);
    }

    if (sortType === "nameDesc") {
      return b.fieldData.name.localeCompare(a.fieldData.name);
    }

    return 0;
  });

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "#f2f2f2",
      }}
    >
      
      {/* ✅ SORT BUTTONS */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => setSortType("priceAsc")}>
          <Text>Prijs ↑</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSortType("priceDesc")}>
          <Text>Prijs ↓</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSortType("nameAsc")}>
          <Text>Naam A-Z</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSortType("nameDesc")}>
          <Text>Naam Z-A</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ PRODUCT LIJST */}
      <FlatList
        data={sortedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}