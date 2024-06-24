import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.jpg")} />
        <Text style={styles.text}>Here We Go 24/25</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.text}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
export default WelcomeScreen;
