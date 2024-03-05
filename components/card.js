import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

const Card = ({item}) => {
    return ( 
        <View style={styles.cardContainer} key={Math.random().toString()}>
            <Image style={styles.avatarImage} source={{uri:item.picture.thumbnail}}/>
            <View style={styles.textContainer}>
            <Text style={styles.textName}>{item.name.first+' '+item.name.last}</Text>
            <Text style={styles.textEmail}>{item.email}</Text>
            </View>
        </View>
     );
}

const styles=StyleSheet.create({
    cardContainer:{
        flexDirection:'row',
        marginBottom:10,
        backgroundColor:'rgba(200,200,200,0.1)',
        padding:10,
    },
    avatarImage:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,
    },
    textContainer:{
        justifyContent:'center'
    },
    textName:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'left'
    }
})

export default Card;