import { StatusBar } from "expo-status-bar";
import { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated, Button,Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Message = (props) => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => props.onHide);
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 4,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}
    >
      <Text>{props.message}</Text>
    </Animated.View>
  );
};

const getRandomMessage = () => {
  const number = Math.trunc(Math.random() * 100);
  return "Random Message " + number;
};

export default function App() {
  const [messages, setMessages] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1}}>
      {messages.map((message) => (
        <Message
          key={message}
          message={message}
          onHide={() => {
            setMessages((messages) =>
              messages.filter((curMessage) => curMessage != message)
            );
          }}
        />
      ))}
      <View style={{position:'absolute',top:(Dimensions.get('window').height)/2,width:'100%'}}>
        <Button
          title="Add Message"
          onPress={() => {
            const msg = getRandomMessage();
            setMessages([...messages, msg]);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
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
