import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const quizQn =[
    {
      qn: "Which is the capital of India?",
      options: [
        { text: "kerala" },
        { text: "New Delhi" },
        { text: "New York" },
        { text: "Mumbai" },
      ],
      ans: 1,
    },
    {
      qn: "Which is the capital of Kerala?",
      options: [
        { text: "kerala" },
        { text: "New Delhi" },
        { text: "New York" },
        { text: "Trivandrum" },
      ],
      ans: 3,
    },
  ] 

  const [selectedOption, setSelectedOption] = useState(null);
  const [optionSelected, setOptionSelected] = useState(false);
  const [selectedOptionColor,setSelectedOptionColor]=useState('');
  const [changeQn,setChangeQn]=useState(false);
  const [currentIndex,setCurrentIndex]=useState(0);
  const [score,setScore]=useState(0);

  const optionSelectHandler = (index) => {
    setOptionSelected(true)
    setSelectedOption(index);
  };

  useEffect(()=>{
    if(selectedOption){
      setTimeout(()=>{
        setSelectedOptionColor('green')
        if(selectedOption==quizQn[currentIndex].ans){
          setScore(prevScore=>prevScore+1);
        }
        setChangeQn(true);
        console.log('color change')
      },500);
    }
  },[selectedOption])

  useEffect(()=>{
    if(changeQn){
      setTimeout(()=>{
        setCurrentIndex(prev=>prev+1);
        resetAll();
      },900)
    }
  },[changeQn])

  const resetAll=()=>{
    setOptionSelected(false);
    setSelectedOption(null);
    setSelectedOptionColor('');
  }

  return (
    <View style={[styles.container, { backgroundColor: "lightgray" }]}>
      <Text style={{ fontSize: 24 }}>{quizQn[currentIndex].qn}</Text>
      {quizQn[currentIndex]&&quizQn[currentIndex].options.map((option, index) => (
        <TouchableOpacity key={index}
          onPress={() => optionSelectHandler(index)}
          disabled={optionSelected}
          style={{
            backgroundColor: (!optionSelected)?'#fff':((quizQn[currentIndex].ans==index)?selectedOptionColor:(selectedOption&&index==selectedOption)?'red':'#fff'),
            width: "90%",
            padding: 10,
            margin: 10,
          }}
        >
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
      <Text>Score: {score}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
