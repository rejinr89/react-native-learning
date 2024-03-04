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

### Deleting item with backspace button:

```js
{text === "del" ? (
    <MaterialIcons name="backspace" size={dialPadSize/2} />
)
```

### Creating array from a limit value:

```js
let keys = [...Array(numberLimit).keys()].map((i) => i + 1);
keys = [...keys, ".", 0, "del"];
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
