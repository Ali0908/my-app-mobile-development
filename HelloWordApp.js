import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Text style={styles.blueText}>Hello, world!</Text>
      <Button title="This is a button" />
    </View>
  );
};

const styles = StyleSheet.create({
  blueText: {
    color: "blue",
  },
  container: {
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HelloWorldApp;