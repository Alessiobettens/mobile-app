import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductenScreen() {
  const [products, setProducts] = useState([]);
  const [skus, setSkus] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a04927dcf62d2e49fcf7e28/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.items || []));

    fetch(
      "https://api.webflow.com/v2/sites/69fdf72b307dcc6cf820875b/products/skus",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setSkus(data.items || []));
  }, []);

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#f2f2f2" }}
    >
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} skus={skus} />}
      />
    </View>
  );
}
