import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainHomeScreen from "./screens/MainHomeScreen";
import NieuwsScreen from "./screens/NieuwsScreen";
import DetailScreen from "./screens/DetailScreen";
import ProductenScreen from "./screens/ProductenScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CampussenScreen from "./screens/CampussenScreen";
import CampusDetailScreen from "./screens/CampusDetailScreen";
import GameScreen from "./screens/GameScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NieuwsHome" component={NieuwsScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function CampusStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CampussenHome" component={CampussenScreen} />
      <Stack.Screen name="CampusDetail" component={CampusDetailScreen} />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductenHome" component={ProductenScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
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

            if (route.name === "Home") iconName = "home";
            else if (route.name === "Nieuws") iconName = "newspaper";
            else if (route.name === "Producten") iconName = "cart";
            else if (route.name === "Campussen") iconName = "school";
            else if (route.name === "Game")
              iconName = "game-controller-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#93ca30",
          tabBarInactiveTintColor: "#727271",
        })}
      >
        <Tab.Screen name="Home" component={MainHomeScreen} />
        <Tab.Screen name="Nieuws" component={HomeStack} />
        <Tab.Screen name="Producten" component={ProductStack} />
        <Tab.Screen name="Campussen" component={CampusStack} />
        <Tab.Screen name="Game" component={GameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
