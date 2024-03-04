import { StyleSheet, View, TextInput, Button,  } from 'react-native';
import { useState } from 'react';

const AddTodo = ({addTodoHandler}) => {
    const [text,setText]=useState('');
    const textChangeHandler=(text)=>{
        setText(text);
    }

    return ( 
        <View style={styles.addTodoContainer}>
            <TextInput onChangeText={(text)=>textChangeHandler(text)} style={styles.addtodoinput}
            placeholder='Enter todo item'/>
            <Button title='Add to do' color='coral' onPress={()=>addTodoHandler(text)}/>
        </View>
     );
}

const styles=StyleSheet.create({
    addTodoContainer:{
        marginTop:20,
    },
    addtodoinput:{
        height:40,
        paddingHorizontal:18,
        paddingVertical:6,
        // marginTop:20,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
    }
})

export default AddTodo;

