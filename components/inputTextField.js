import { View, Text, TextInput,StyleSheet } from "react-native";

const InputTextField = ({title}) => {
    return ( 
        <View style={{marginBottom:20}}>
            <Text style={styles.inputTitle}>{title}</Text>
            <View>
                <TextInput style={styles.input}/>
            </View>
        </View>
     );
}
 
export default InputTextField;

const styles=StyleSheet.create({
    inputTitle:{
        color:'#abb4bd',
        fontSize:14,
        textAlign:'left',
        textTransform:'capitalize',
        marginBottom:-15,
    },
    input:{
        paddingVertical:12,
        color:'#1d2029',
        fontSize:14,
        textTransform:'capitalize',
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    }
})