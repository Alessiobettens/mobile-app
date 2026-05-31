import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

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
        renderItem={({ item }) => {
          const sku = skus.find((s) => s.id === item.fieldData["default-sku"]);

          return (
            <View
              style={{
                marginBottom: 20,
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 12,
              }}
            >
              <Image
                source={{
                  uri:
                    sku?.fieldData?.image?.url ||
                    "https://via.placeholder.com/300",
                }}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
              />

              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                {item.fieldData.name}
              </Text>

              <Text style={{ color: "#555", marginTop: 5 }}>
                € {sku?.price?.value ? sku.price.value / 100 : "Geen prijs"}
              </Text>
            </View>
          );
          console.log(sku);
        }}
      />
    </View>
  );
}