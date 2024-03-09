import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TodoItem from "./components/todoitem";
const COLORS={primary:'#457b9d',white:'#fff'}

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Buy grocery" },
    { id: 2, todo: "Goto movie" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo App</Text>
        <TouchableOpacity style={styles.trash}>
          <FontAwesome name="trash" size={24} color={"red"} />
        </TouchableOpacity>
      </View>
      <View style={styles.todoItemContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem item={item.todo} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter todo item" />
        <TouchableOpacity style={styles.addTodoBtn}>
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
  todoItemContainer:{
    flex:1,
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    paddingHorizontal:20,
    color:'#fff',
    gap:20,
  },
  input: {
    padding:10,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:30,
    width:'80%'
  },
  addTodoBtn:{
    backgroundColor:COLORS.primary,
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  addTodoText:{
    fontSize:28,
  }
});
