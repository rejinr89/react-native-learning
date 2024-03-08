# Custom modal demo App

<img width="300px" src="parallax-image-carousel-screenshot1.jpg" alt="image_name png" />
<img width="300px" src="parallax-image-carousel-screenshot2.jpg" alt="image_name png" />
The project was created as part of learning React Native tutorial from the youtube channel 
Coding with Artem:

https://www.youtube.com/watch?v=osE2NKPsz-s

## Learning

### Adding image to the carousel
```js
const [images, setImages] = useState([
    { id: 1, image: require("./assets/1.jpg"), title: "Image Title" },
    { id: 2, image: require("./assets/2.jpg"), title: "Image Title" },
    { id: 3, image: require("./assets/3.jpg"), title: "Image Title" },
    { id: 4, image: require("./assets/4.jpg"), title: "Image Title" },
    { id: 5, image: require("./assets/5.jpg"), title: "Image Title" },
  ]);

return (
            <View style={styles.itemContainer}>
              <Animated.Image source={item.image} style={[styles.image,{transform:[{translateX}]}]} />
              <Animated.View style={[styles.titleContainer,{opacity:opacityCtrl}]}>
                <Text style={styles.title}>{item.title}</Text>
              </Animated.View>
              <Animated.View style={[StyleSheet.absoluteFillObject,styles.itemOverlay]}/>
            </View>
          )

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    overflow:'hidden',
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
    zIndex:1
  },
  itemOverlay:{
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
});

```

### Adding scrolling styles:

```js
 const scrollAnimation = useRef(new Animated.Value(0)).current;

<Animated.FlatList
        horizontal
        bounces
        data={images}
        keyExtractor={(item) => item.id}
        pagingEnabled
        // snapToInterval={width}
        // snapToAlignment={'end'}
        // decelerationRate={'slow'}
        // showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item,index }) => {
          const inputRange = [
            (index - 0.5) * width,
            index * width,
            (index + 0.5) * width
          ];
          const translateX = scrollAnimation.interpolate({
            inputRange,
            outputRange: [-width*(0.5), 0, width*(0.5)]
          })
          const opacityCtrl = scrollAnimation.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
```
