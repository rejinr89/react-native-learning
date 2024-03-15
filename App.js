import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated,{useSharedValue,FadeInUp,FadeOutUp} from "react-native-reanimated";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";

export default function App() {
  const width=useSharedValue(100);
  const [showAnimation,setShowAnimation]=useState(false)

  const handlePress=()=>{
    setShowAnimation(prevState=>!prevState)
  }

  return <View style={{flex:1,alignItems:'center'}}>
    {
      showAnimation&&
    <Animated.View 
    entering={FadeInUp}
    exiting={FadeOutUp}
    style={{
      top:70,
      backgroundColor:'#20639B',
      width:'90%',
      borderRadius:5,
      padding:20,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      shadowColor:'#003049',
      shadowOpacity:0.4,
      shadowRadius:2,
      shadowOffset:{width:0,height:1},
      elevation:2
    }}>
      <MaterialIcons name="info" size={30} color={'#F6F4F4'}/>
      <View>
        <Text style={{
          fontSize:18,
          color:'#F6F4F4',
          fontWeight:'bold',
          marginLeft:10,
        }}>Info</Text>
        <Text
        style={{
          fontSize:14,
          color:'#F6F4F4',
          marginLeft:10,
        }}
        >This is an animated toast messag</Text>
      </View>
    </Animated.View>
    }
    <View style={{position:'absolute',bottom:10}}>
    <Button onPress={handlePress} title="click me"/>
    </View>
  </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
