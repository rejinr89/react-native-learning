import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const TodoItem = ({ item, deleteIndividualHandler }) => {
  const [completed, setCompleted] = useState(false);
  const completeHandler = () => {
    setCompleted(true);
  };

  return (
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
    fontWeight: "bold",
  },
  todoItemIconContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TodoItem;
