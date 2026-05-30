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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function ProductenScreen() {
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

function CampussenScreen({ navigation }) {
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

function CampusDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{
          uri:
            item.fieldData.afbeelding?.url || "https://via.placeholder.com/300",
        }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {item.fieldData.name}
      </Text>

      <Text style={{ marginTop: 5 }}>{item.fieldData.adres}</Text>

      <Text style={{ marginTop: 10 }}>Focus: {item.fieldData.focus}</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NieuwsHome"
        component={HomeScreen}
        options={{ title: "Nieuws" }}
      />

      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function CampusStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Campussen"
        component={CampussenScreen}
        options={{ title: "Campussen" }}
      />

      <Stack.Screen
        name="CampusDetail"
        component={CampusDetailScreen}
        options={{ title: "Campus" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Nieuws") {
              iconName = "newspaper";
            } else if (route.name === "Producten") {
              iconName = "cart";
            } else if (route.name === "Campussen") {
              iconName = "school";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#93ca30",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Nieuws"
          component={HomeStack}
          options={{ title: "Nieuws" }}
        />

        <Tab.Screen
          name="Producten"
          component={ProductenScreen}
          options={{ title: "Producten" }}
        />

        <Tab.Screen
          name="Campussen"
          component={CampusStack}
          options={{ title: "Campussen" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
