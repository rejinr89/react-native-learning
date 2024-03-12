# Theme switcher app in tailwind

<img width="300px" src="theme-switcher-1.jpg" alt="image_name png" />

<img width="300px" src="theme-switcher-2.jpg" alt="image_name png" />

The project was created as part of learning React Native tutorial from the youtube channel 
Code With Nomi:

https://www.youtube.com/watch?v=2MHBfatlC5g

## Learning

### Tailwind installation

Goto

```url
https://www.nativewind.dev/quick-starts/expo
```
Install tailwind and nativewind
```cmd
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```
set up tailwind css
```
// tailwind.config.js

module.exports = {
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add Babel plugin
```
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};

```

### Styling with tailwind
```html
<View className='flex-1 justify-center items-center dark:bg-neutral-900'>
      <View className='flex-row justify-center items-center space-x-2'>
      <Text className='text-xl dark:text-white'>Toggle Theme</Text>
      <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}/>
      </View>
      <Text className='dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum excepturi unde in aliquid reprehenderit ratione, voluptatem inventore assumenda iusto beatae obcaecati, ducimus sequi ex repudiandae quis rem iure similique dolore maiores facere placeat pariatur. Nobis maxime minima modi magni saepe sed fuga quidem tempore dolores itaque consequuntur, eaque cum suscipit ut! Nemo officia inventore veritatis eos exercitationem voluptas dolores assumenda neque hic deleniti id sapiente vero magnam ex facere, odit porro, at, aliquid similique animi nostrum dolor molestias! Minus voluptatum exercitationem aliquid eaque! Harum placeat eligendi delectus blanditiis in, temporibus, voluptatibus praesentium nulla quam corrupti eaque ab incidunt iste!</Text>
      <StatusBar style='auto'/>
      <View className='h-48 w-full bg-sky-400 dark:bg-emerald-400'></View>
    </View>
```

### Marking task as completed with line-through
```js
const [completed, setCompleted] = useState(false);
  const completeHandler = () => {
    setCompleted(true);
  };

<TouchableOpacity onPress={() => completeHandler()}>
      <View style={styles.todoItem}>
        <Text
          style={[
            styles.todoItemText,
            { textDecorationLine: completed ? "line-through" : "none" },
          ]}
        >
          {item.todo}
        </Text>
        <View style={styles.todoItemIconContainer}>
          {completed && <FontAwesome name="check-square" size={18} />}
          <TouchableOpacity onPress={() => deleteIndividualHandler(item.id)}>
            <FontAwesome name="trash" size={18} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
```

### Defining and using global colors:

```js
const COLORS = { primary: "#457b9d", white: "#fff" };

backgroundColor: COLORS.primary,
```

### Styling todo app:

```js
<SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo App</Text>
        <TouchableOpacity style={styles.trash} onPress={clearAllHandler}>
          <FontAwesome name="trash" size={24} color={"red"} />
        </TouchableOpacity>
      </View>
      <View style={styles.todoItemContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem item={item} deleteIndividualHandler={deleteIndividualHandler} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo item"
          onChangeText={(text) => {
            changeTextHandler(text);
          }}
        />
        <TouchableOpacity style={styles.addTodoBtn} onPress={addTodo}>
          <Text style={styles.addTodoText}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  todoItemContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    color: "#fff",
    gap: 20,
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    width: "80%",
  },
  addTodoBtn: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addTodoText: {
    fontSize: 28,
  },
});
```

### Challenges faced

1. Struggled with aligning input box at bottom and aligning button

### Learning further

1. Learning and practicing more styling in React Native
