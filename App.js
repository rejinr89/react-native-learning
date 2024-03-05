import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './components/card';
// import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [searchText,setSearchText]=useState('');
  const [userInfo,setUserInfo]=useState([]);
  const [tempUserInfo,setTempUserInfo]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const API_END_POINT='https://randomuser.me/api/?results=30';

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    fetchData(API_END_POINT)
  },[])
  
  const changeTextHandler=(text)=>{
    setSearchText(text);
    
  }

  const fetchData=async (url)=>{
    setIsLoading(true);
    const response=await fetch(url);
    const json=await response.json();
    setUserInfo(json.results);
    setTempUserInfo(json.results);
    setIsLoading(false);
    console.log(userInfo);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Enter keyword for search' style={styles.searchBox} onChangeText={(text)=>changeTextHandler(text)}/>
      <FlatList
      data={userInfo}
      renderItem={({item})=><Card item={item} key={Math.random().toString()}/>}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBox:{
    margin:10,
    height:60,
    marginBottomColor:'rgba(200,200,200,0.1)',
    borderBottomWidth:0.25,
    marginBottom:20,
  }
});
