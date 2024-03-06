import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Button,  } from 'react-native';
import ModalPopUp from './components/modalpopup';
import { useState } from 'react';

export default function App() {
  const [visible,setVisible]=useState(false);
  const toggleModalHandler=()=>{
    setVisible(prevVisibleState=>!prevVisibleState);
  }

  return (
    <View style={styles.container}>
      <ModalPopUp visible={visible} toggleModalHandler={toggleModalHandler}/>
      <Button title='Open Modal' onPress={()=>toggleModalHandler()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
