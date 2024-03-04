import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.headerText}>Todo List App</Text>
        </View>
     );
}
 
const styles=StyleSheet.create({
    header:{
        paddingTop:38,
        backgroundColor:'coral',
        height:100,
    },
    headerText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:20
    }
})
export default Header;
