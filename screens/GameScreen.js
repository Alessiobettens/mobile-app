import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function GameScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://boekenvanger.netlify.app/" }}  // ✅ later aanpassen
      />
    </View>
  );
}