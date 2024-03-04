Todo List App - Net ninja tutorials
-Observed difference in adding padding to containers and text inside it, doesn't work exactly like web.
-borderStyle:'dashed'
-usage of flatlist:
<FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} itemClickHandler={itemClickHandler} />
          )}
/>

-updating input text onChangeText 
-borderBottomWidth:1, borderBottomColor:'#ccc',
-deleting item with usestate and filter:
 const itemClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

-Adding item with usestate:
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

-Dismissing keyboard:
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    after successfull data entry also add Keyboard.dismiss()

-Adding icon:
import { MaterialIcons } from "@expo/vector-icons"; //preinstalled
<MaterialIcons name="delete" size={20} color='#333'/>