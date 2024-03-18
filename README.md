# Animated Toast Notification
<img width="300px" src="animated-toast-notification-screen1.jpg" alt="image_name png" />
<img width="300px" src="animated-toast-notification-screen2.jpg" alt="image_name png" />

The project was created as part of learning React Native tutorial using the youtube tutorial:
Evening Kid

https://www.youtube.com/watch?v=06R21cIFlwo

## Learning

Animated toast notifications
### Code
```js
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
```

### Challenges faced

1. Align button in screen. Can't style button. Need to wrap it with View

### Learning further

1. Need to practice more about animation with reanimated
