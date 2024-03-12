import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ViewBase,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useState, useEffect } from "react";

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui praesentium dolor sint earum nam vel culpa aperiam eius commodi nihil provident omnis vero alias, porro amet quos consequatur corrupti.",
    image: require("./images/1.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui praesentium dolor sint earum nam vel culpa aperiam eius commodi nihil provident omnis vero alias, porro amet quos consequatur corrupti.",
    image: require("./images/2.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui praesentium dolor sint earum nam vel culpa aperiam eius commodi nihil provident omnis vero alias, porro amet quos consequatur corrupti.",
    image: require("./images/3.png"),
  },
];

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <View style={styles.container}>
      <AppIntroSlider
      data={slides}
      renderItem={({ item,index }) => {
        return (
          <View >
            <Image
              source={item.image}
              style={{
                resizeMode: "cover",
                height: "73%",
                width: "100%",
              }}
            />
            <Text
              style={{
                paddingTop: 25,
                paddingBottom: 10,
                fontSize: 23,
                fontWeight: "bold",
                color: "#21465b",
                alignSelf: "center",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#b5b5b5",
                fontSize: 15,
                paddingHorizontal: 30,
              }}
            >
              {item.text}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{backgroundColor:'#21465b',width:30}}
    />
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
