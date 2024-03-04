import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, itemClickHandler }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => itemClickHandler(item.id)}
    >
      <View style={styles.itemContainer}>
        <MaterialIcons name="delete" size={20} color='#333'/>
        <Text style={styles.itemText}>{item.todo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderStyle:'dashed',
    borderWidth:1,
    marginBottom:10,
    padding:10,
  },
  itemText:{
    marginLeft:10
  }
});
export default TodoItem;
