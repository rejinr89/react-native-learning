import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInputComponent from "../components/textinput";


const Registration = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          color: Colors.primary,
          marginTop: 30,
          fontWeight: "bold",
        }}
      >
        Create an Account
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          color: Colors.text,
          margin: 30,
          fontWeight: "bold",
        }}
      >
        Create an account so you can explore all the existing jobs
      </Text>
      <TextInputComponent text={'email'}/>
      <TextInputComponent text={'password'}/>
      <TextInputComponent text={'retype password'}/>
      <View
        style={{
          margin: 10,
          padding: 20,
          borderRadius: 10,
          backgroundColor: Colors.active,
          shadowColor: "blue",
          shadowOpacity: 0.1,
          elevation: 20,
          shadowOffset: {
            height: 0,
            width: 1,
          },
          shadowRadius: 1,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontSize: FontSize.medium,
              textAlign: "center",
              color: Colors.onPrimary,
              fontSize: FontSize.medium,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('registration')}>
        <Text style={{textAlign:'center', margin:20,fontWeight:'bold'}}>Already have an account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', margin:10,fontWeight:'bold',color:Colors.primary}}>Or continue with</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center', marginTop:20,}}>
            <TouchableOpacity>
            <MaterialCommunityIcons name='google' size={22} style={{backgroundColor:Colors.gray, padding:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons name='apple' size={22} style={{backgroundColor:Colors.gray, padding:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name='facebook-square' size={22} style={{backgroundColor:Colors.gray, padding:10}}/>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
