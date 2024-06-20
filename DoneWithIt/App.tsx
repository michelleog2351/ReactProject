import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  // const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={[styles.container]}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const containerStyle = { backgroundColor: "orange" };
