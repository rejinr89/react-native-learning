import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { useState, useRef } from "react";

const { width, height } = Dimensions.get("window");
export default function App() {
  const [images, setImages] = useState([
    { id: 1, image: require("./assets/1.jpg"), title: "Image Title" },
    { id: 2, image: require("./assets/2.jpg"), title: "Image Title" },
    { id: 3, image: require("./assets/3.jpg"), title: "Image Title" },
    { id: 4, image: require("./assets/4.jpg"), title: "Image Title" },
    { id: 5, image: require("./assets/5.jpg"), title: "Image Title" },
  ]);

  const scrollAnimation = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        bounces
        data={images}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToInterval={width}
        snapToAlignment={'end'}
        decelerationRate={'slow'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item,index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ];
          const translateX = scrollAnimation.interpolate({
            inputRange,
            outputRange: [-width * 0.8, 0, width * 0.8]
          })
          return (
            <View style={styles.itemContainer}>
              <Animated.Image source={item.image} style={[styles.image,{transform:[{translateX}]}]} />
              <Animated.View style={styles.titleContainer}>
                <Animated.Text style={styles.title}>{item.title}</Animated.Text>
              </Animated.View>
            </View>
          )
        }
        
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    position: "relative",
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  titleContainer: {
    position: "absolute",
    bottom: 80,
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
});
