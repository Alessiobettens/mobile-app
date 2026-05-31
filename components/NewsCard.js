import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function NewsCard({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <View style={styles.card}>
        
        <Image
          source={{
            uri:
              item.fieldData.image?.url ||
              "https://via.placeholder.com/300",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>
          {item.fieldData.name || "Geen titel"}
        </Text>

        <Text style={styles.intro}>
          {item.fieldData.intro}
        </Text>

      </View>
    </TouchableOpacity>
  );
}