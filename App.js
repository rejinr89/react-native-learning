import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState,useEffect } from "react";
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [quote,setQuote]=useState('');
  const [author,setAuthor]=useState('');
  const [isLoading,setIsLoading]=useState(false);
  const [isSpeaking,setIsSpeaking]=useState(false);
  const [clipBoard,setClipBoard]=useState('');
  
  const getQuote=async()=>{
    try{
      setIsLoading(true)
      const result=await fetch('http://api.quotable.io/random');
      const jsonData=await result.json();
      setIsLoading(false);
      setQuote(jsonData.content);
      setAuthor(jsonData.author);
    }catch(e){
      console.log(e)
    }
  }

  const speakUp=()=>{
    const thingToSay = quote;
    Speech.stop();
    Speech.isSpeakingAsync().then(()=>setIsSpeaking(true));
    Speech.speak(thingToSay+'     '+author,{onDone:()=>setIsSpeaking(false)});
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(quote);
  };

  const tweetNow=()=>{
    const url='https://twitter.com/intent/tweet?text='+quote;
    Linking.openURL(url);
  }

  useEffect(()=>{
    getQuote();
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteTitle}>Quote of the day</Text>
        <FontAwesome name="quote-left" style={styles.quoteSymbolLeft} />
        <Text style={styles.quoteText}>
          {isLoading?'Loading...':quote}
        </Text>
        <FontAwesome name="quote-right" style={styles.quoteSymbolRight} />
        <Text style={styles.quoteAuthor}>- {isLoading?'Loading...':author}</Text>
        <TouchableOpacity style={[styles.btn,{backgroundColor:isLoading?'rgba(83,114,240,0.7)':'rgba(83,114,240,1)'}]} onPress={()=>getQuote()}>
          <Text style={styles.btnText}>New Quote</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={[styles.iconBtn]} onPress={()=>speakUp()}>
            <FontAwesome name="volume-up" size={18} style={{color:isSpeaking?'red':'green'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={()=>copyToClipboard()}>
            <FontAwesome name="copy" size={18} color={'#5372F0'}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={()=>tweetNow()}>
            <FontAwesome name="twitter" size={18} color={'#5372F0'}/>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5370F0",
    alignItems: "center",
    justifyContent: "center",
  },
  quoteContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "90%",
  },
  quoteTitle: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 10,
    fontWeight: "bold",
  },
  quoteSymbolLeft: {
    fontSize: 20,
    marginBottom: -10,
  },
  quoteText: {
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  quoteSymbolRight: {
    fontSize: 20,
    marginTop: -20,
    textAlign: "right",
  },
  quoteAuthor: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "italic",
    margin: 10,
  },
  btn: {
    // backgroundColor: "#5370F2",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    borderRadius: 30,
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    justifyContent: "space-around",
  },
  iconBtn:{
    borderWidth:2,
    borderColor:'#5370F2',
    padding:15,
    borderRadius:30,
  }
});
