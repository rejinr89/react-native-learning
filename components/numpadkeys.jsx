import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const dialPadSize = width * 0.2;
const NumPadKey = ({ text, keyPressHandler }) => {
  return (
    <View style={styles.keypad}>
      <TouchableOpacity onPress={() => keyPressHandler(text)}>
        {text === "del" ? (
          <MaterialIcons name="backspace" size={dialPadSize/2} />
        ) : (
          <Text style={styles.keypadText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keypad: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: dialPadSize,
    height: dialPadSize,
    borderRadius: dialPadSize / 2,
    margin: 5,
    backgroundColor: "rgba(220,220,220,0.4)",
    textAlign: "center",
    justifyContent: "center",
  },
  keypadText: {
    fontSize: dialPadSize / 2,
  },
});
export default NumPadKey;
