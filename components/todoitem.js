import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TodoItem = ({ item }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoItemText}>{item}</Text>
      <View style={styles.todoItemIconContainer}>
        <TouchableOpacity>
          <FontAwesome name="check-square" size={18} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="trash" size={18} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    backgroundColor: "rgba(245,245,245,.3)",
    borderWidth: 0.5,
    borderColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
  todoItemText: {
    fontSize: 18,
  },
  todoItemIconContainer:{
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default TodoItem;
