import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const TextInputComponent = ({ text }) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        {
          backgroundColor: Colors.gray,
          height: Spacing * 5,
          margin: 10,
          borderRadius: 10,
          padding: 10,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowOpacity:0.3,
          shadowRadius:Spacing
        },
      ]}
    >
      <TextInput
        placeholder={text}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default TextInputComponent;
