import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 50,
    backgroundColor: "#e1e2e1",
    padding: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#ffffff",
  },

  intro: {
    color: "#ffffff",
    marginTop: 5,
  },

  button: {
    marginHorizontal: 100,
    backgroundColor: "#86bc25",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },

  productCard: {
    marginBottom: 20,
    backgroundColor: "#93ca30",
    padding: 10,
    borderRadius: 10,
  },
});
