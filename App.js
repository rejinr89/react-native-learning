import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList,Alert,Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "./components/header";
import { useState } from "react";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";

export default function App() {
  const [todos, setTodos] = useState([
    { todo: "Purchase Grocery", id: 1 },
    { todo: "Learn cryptography", id: 2 },
    { todo: "Teach cryptography", id: 3 },
  ]);

  const itemClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

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
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <AddTodo addTodoHandler={addTodoHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} itemClickHandler={itemClickHandler} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 20,
  },
});
