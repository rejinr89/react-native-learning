# Todo List App

<img width="300px" src="todolist-screenshot.jpg" alt="image_name png" />
The project was created as part of learning Netninja React Native tutorial.

## Learnings

-Observed difference in adding padding to containers and text inside it, doesn't work exactly like web.
-borderStyle:'dashed'

### Flatlist

```js
<FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} itemClickHandler={itemClickHandler} />
          )}
/>
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
