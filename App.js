import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/card";
import * as SplashScreen from "expo-splash-screen";
import filter from 'lodash.filter';

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [tempUserInfo, setTempUserInfo] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const API_END_POINT = "https://randomuser.me/api/?results=30";

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        fetchData(API_END_POINT);
      } catch (e) {
        setIsError(true)
        console.log(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [isReady]);

  const changeTextHandler = (query) => {
    setSearchText(query);
    const formattedQuery=query.toLowerCase();
    const filteredData=filter(tempUserInfo,(user)=>{
      return contains(user,formattedQuery);
    })
    setUserInfo(filteredData);
  };

  const contains=({name,email},query)=>{
    const {first,last}=name;
    if(first.includes(query)||last.includes(query)||email.includes(query)){
      return true;
    }else{
      return false;
    }
  }

  const fetchData = async (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setUserInfo(result.results);
          setTempUserInfo(result.results);
          setIsError(false);
          setIsLoading(false);
          console.log(userInfo);
        }).catch(e=>{
          console.log(e);
          setIsError(true);
        })
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter keyword for search"
          style={styles.searchBox}
          clearButtonMode='always'
          autoCapitalize="none"
          autoCorrect="none"
          onChangeText={(text) => changeTextHandler(text)}
        />
        {isError ? 
          <View>
            <Text style={{textAlign:'center'}}>Error in Loading....</Text>
          </View>
         : 
         <View>
            <FlatList
              data={userInfo}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Card item={item} />}
            />
          </View>
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBox: {
    margin: 10,
    height: 60,
    borderBottomWidth: 0.25,
    marginBottom: 20,
  },
});
