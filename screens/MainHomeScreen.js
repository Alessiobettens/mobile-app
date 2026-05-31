import React from "react";
import { ScrollView, View, Text, Image, Button } from "react-native";
import { styles } from "../styles/styles";

export default function MainHomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image
          source={require("../assets/main-image.jpg")}
          style={{ width: "100%", height: 210 }}
        />

        <View
          style={{
            position: "absolute",
            top: 100,
            left: 20,
            right: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 26, fontWeight: "bold" }}>
            Welk talent bouw jij uit?
          </Text>

          <Text style={{ color: "#fff", marginTop: 5 }}>
            Ontdek welke richting het best bij jouw talenten past.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{ lineHeight: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Busleyden Atheneum</Text> is de
          grootste en meest veelzijdige secundaire school van Mechelen. In
          Busleyden Atheneum willen we dat je een studierichting volgt die
          aansluit bij{" "}
          <Text style={{ fontWeight: "bold" }}>
            jouw talenten en interesses
          </Text>
          . Leren gaat immers het best als je kan doen wat je graag doet en waar
          je goed in bent. Daarom hebben we meer dan{" "}
          <Text style={{ fontWeight: "bold" }}>100 studieopties</Text>,
          verspreid over{" "}
          <Text style={{ fontWeight: "bold" }}>zeven unieke campussen</Text> met
          elk een eigen sfeer en profiel.
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Button
          title="Start spel"
          onPress={() => console.log("later spel openen")}
        />
      </View>
    </ScrollView>
  );
}
