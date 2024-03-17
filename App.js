import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Animated } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

export default function App() {
  const [icon1]=useState(new Animated.Value(40));
  const [icon2]=useState(new Animated.Value(40));
  const [icon3]=useState(new Animated.Value(40));
  const [pop,setPop]=useState(false)
 const popIn=()=>{
  setPop(true);
  Animated.timing(icon1,{
    toValue:130,
    duration:500,
    useNativeDriver:false
  }).start()
  Animated.timing(icon2,{
    toValue:110,
    duration:500,
    useNativeDriver:false
  }).start()
  Animated.timing(icon3,{
    toValue:130,
    duration:500,
    useNativeDriver:false
  }).start()
 }
 const popOut=()=>{
  setPop(false);
  Animated.timing(icon1,{
    toValue:40,
    duration:500,
    useNativeDriver:false
  }).start()
  Animated.timing(icon2,{
    toValue:40,
    duration:500,
    useNativeDriver:false
  }).start()
  Animated.timing(icon3,{
    toValue:40,
    duration:500,
    useNativeDriver:false
  }).start()
 }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle,{bottom:icon1}]}>
        <TouchableOpacity>
          <MaterialIcon name='cloud-upload' size={25} color={'#fff'}/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle,{bottom:icon2,right:icon2}]}>
        <TouchableOpacity>
          <MaterialIcon name='print' size={25} color={'#fff'}/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle,{right:icon3}]}>
        <TouchableOpacity>
          <MaterialIcon name='share' size={25} color={'#fff'}/>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.circle} onPress={pop?popOut:popIn}>
      <MaterialIcon name='add' size={25} color={'#FFF'}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circle:{
    backgroundColor:'#f52d56',
    width:60,
    height:60,
    position:'absolute',
    bottom:40,
    right:40,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  }
});
