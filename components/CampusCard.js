import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function CampusCard({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CampusDetail", { item })}
    >
      <View style={styles.card}>
        
        <Image
          source={{
            uri:
              item.fieldData.afbeelding?.url ||
              "https://via.placeholder.com/300",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>
          {item.fieldData.name}
        </Text>

        <Text style={styles.intro}>
          {item.fieldData.adres}
        </Text>

      </View>
    </TouchableOpacity>
  );
}
