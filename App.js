import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { useState,useEffect } from "react";
import Constants from "expo-constants";
import NumPadKey from "./components/numpadkeys";

export default function App() {
  const lockLength = 4;
  const numberLimit = 9;
  const pin = 1234;

  let keys = [...Array(numberLimit).keys()].map((i) => i + 1);
  keys = [...keys, ".", 0, "del"];
  const [pinCode, setPinCode] = useState([]);

  const keyPressHandler = (text) => {
    if (text === "del") {
      setPinCode((prevPassText) =>
        prevPassText.slice(0, prevPassText.length - 1)
      );
    }else{
      setPinCode((prevPassText) => {
        if (prevPassText.length < lockLength) {
          return [...prevPassText, text];
        }
      });
    }
  };

  useEffect(()=>{
    console.log(pinCode.join(""));
    if(pinCode.join("")==pin){
      Alert.alert('Hurray','Pin Match');
    }
  },[pinCode])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your passkey</Text>
      <View style={styles.lock}>
        {[...Array(lockLength).keys()].map((i) => {
          const isSelected = !!pinCode[i];
          return (
            <View
              key={i}
              style={[styles.lockContainer, { height: isSelected ? 20 : 2 }]}
            ></View>
          );
        })}
      </View>
      <View style={styles.keypadContainer}>
        <FlatList
          data={keys}
          numColumns={3}
          renderItem={({ item }) => (
            <NumPadKey text={item} keyPressHandler={keyPressHandler} />
          )}
          columnWrapperStyle={{ gap: 20 }}
          contentContainerStyle={{ gap: 20 }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: Constants.statusBarHeight + 20,
    textAlign: "center",
    fontSize: 30,
  },
  keypadContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  passText: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: 20,
    textAlign: "center",
    fontSize: 26,
  },
  lock: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  lockContainer: {
    borderBottomColor: "#ccc",
    backgroundColor: "#ddd",
    width: 20,
    margin: 20,
    marginTop: 50,
    borderRadius: 10,
  },
});
