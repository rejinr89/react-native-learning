import { Modal, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";

const ModalPopUp = ({visible,toggleModalHandler}) => {
    return ( 
        <Modal transparent visible={visible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>toggleModalHandler()}>
                        <Image
                        source={require('../assets/x.png')}
                        style={{height:30,width:30}}/>
                        </TouchableOpacity>
                    </View>
                    <Image
                    source={require('../assets/success.png')}
                    style={{height:150,width:150,marginVertical:10}}/>
                    <Text style={{textAlign:'center',marginVertical:30,fontSize:20}}>Congratulations registration was successfull</Text>
                </View>
            </View>
        </Modal>
     );
}

const styles=StyleSheet.create({
    modalBackground:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        width:'80%',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:20,
        alignItems:'center'
    },
    header:{
        width:'100%',
        height:40,
        alignItems:'flex-end',
        justifyContent:'center'
    }
})

export default ModalPopUp;