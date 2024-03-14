import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    isActive
      ? (timer = setInterval(() => {
          console.log("hello world");
          setProgress((progress) => progress + 0.1);
        }, 1000))
      : clearInterval(timer);
    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (progress >= 1) {
      setIsActive(false);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      {progress>=1?<Text>This text is displayed only after 10 seconds</Text>:null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
