import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: Dimensions.get("window").height / 2.5 }}
        resizeMode="contain"
        source={require("../assets/images/welcome-img.png")}
      />
      <Text
        style={{
          fontSize: FontSize.xxLarge,
          textAlign: "center",
          fontWeight: "bold",
          margin: Spacing * 2,
          color: Colors.primary,
        }}
      >
        Discover your dream job here
      </Text>
      <Text
        style={{
          fontSize: FontSize.medium,
          textAlign: "center",
          margin: Spacing * 2,
        }}
      >
        Explore all the existing job roles based or your interest and study
        major
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            width: "45%",
            backgroundColor: Colors.primary,
            padding: Spacing * 1.5,
            borderRadius: Spacing * 1.5,
            shadowColor:Colors.gray,
            shadowOffset:{
                width:2,
                height:Spacing
            },
            shadowOpacity:0.6,
            shadowRadius:Spacing
          }}
          onPress={()=>navigation.navigate('login')}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: Colors.onPrimary,
              fontSize:14,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "45%",
            // backgroundColor: Colors.primary,
            padding: Spacing * 1.5,
            borderRadius: Spacing * 1.5,
          }}
          onPress={()=>navigation.navigate('registration')}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: Colors.text,
              fontSize: 14
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
