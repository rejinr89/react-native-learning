# Error screen ui
<img width="300px" src="error-screen-ui-screenshot.jpg" alt="image_name png" />

The project was created as part of learning React Native tutorial using the youtube tutorial:
Code Spring

https://www.youtube.com/watch?v=JA0uZRUwUkM

## Learning

### Code
```js
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/404.png")}
        style={{ width: Dimensions.get("screen").width - 80, height: 320 }}
      />
      <Text
        style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
      >{`Oops! You weren't \n supposed to see this`}</Text>
      <Text style={{ fontWeight: "600", fontSize: 12, marginVertical: 10 }}>
        The page you were looking was loading incorrectly
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: "#000",
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: 14,
            marginVertical: 10,
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcb82f",
    alignItems: "center",
    justifyContent: "center",
  },
});

```
### Challenges faced

1. Nil

### Learning further

1. Need to practice more about animation with reanimated
