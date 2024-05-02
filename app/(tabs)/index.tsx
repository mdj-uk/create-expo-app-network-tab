import { Button, GestureResponderEvent, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useState } from "react";

export default function TabOneScreen() {
  const [message, setMessage] = useState("hi");
  async function handleClick(event: GestureResponderEvent) {
    // setMessage((m) => (m === "hi" ? "hello" : "hi"));
    // console.log("handler");

    if (message === "hi") {
      try {
        const r = await fetch("/hello").then((r) => r.json());
        setMessage(r.hello);
      } catch (error) {
        setMessage("there was an error");
      }
    } else {
      setMessage("hi");
    }
  }
  async function fetchHello() {
    const response = await fetch("/hello");
    const data = await response.json();
    alert("Hello " + data.hello);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <Text>{message}</Text>
      <Button title="Click me" onPress={handleClick} />
      <Button onPress={() => fetchHello()} title="Fetch hello" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
