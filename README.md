# Security Lock Screen App

<img width="300px" src="lockscreenapp-screenshot.jpg" alt="image_name png" />
The project was created as part of learning React Native tutorial in the youtube channel Flaira:

https://www.youtube.com/watch?v=PaRyx0CUTnI


## Learnings

### Adjusting space with respect to app dimension
```js
import {
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const dialPadSize = width * 0.2;

<MaterialIcons name="backspace" size={dialPadSize/2} />

width: dialPadSize,
    height: dialPadSize,
    borderRadius: dialPadSize / 2,
```

-borderBottomWidth:1, borderBottomColor:'#ccc'

### Deleting item with usestate and filter:

```js
const itemClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
```

### Adding item with usestate:

```js
const addTodoHandler = (text) => {
    if (text.length <= 3) {
      Alert.alert("Oops!", "Input length should be greater than 3", [
        {
          text: "Understood",
          onPress: () => {
            console.log("Alert closed");
          },
        },
      ]);
    } else {
      setTodos((prevTodos) => [
        { todo: text, id: Math.random().toString() },
        ...prevTodos,
      ]);
    }
  };
```
### Dismissing keyboard:

```js
<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
```

### Adding Icon

```js
import { MaterialIcons } from "@expo/vector-icons"; //preinstalled

<MaterialIcons name="delete" size={20} color='#333'/>
```
