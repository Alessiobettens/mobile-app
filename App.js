import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a187372e300a789392b5df2/items",
      {
        headers: {
          Authorization:
            "Bearer c438614a6dd5bcd906bb481dd394634d08798782a180ff00c2a15243ac0da0b2",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => setNews(data.items || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#f2f2f2" }}
    >
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { item })}
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
                  uri: item.fieldData.image
                    ? item.fieldData.image.url
                    : "https://via.placeholder.com/300",
                }}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />

              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                {item.fieldData.name || "Geen titel"}
              </Text>

              <Text style={{ color: "#555", marginTop: 5 }}>
                {item.fieldData.intro}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: item.fieldData.image.url }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>

      <Text style={{ color: "#888", marginTop: 5 }}>
        {item.fieldData.datum}
      </Text>

      <Text style={{ marginTop: 10 }}>{item.fieldData.intro}</Text>

      <Text style={{ marginTop: 15, lineHeight: 20 }}>
        {item.fieldData.inhoud || "Geen inhoud beschikbaar"}
      </Text>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nieuws" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
