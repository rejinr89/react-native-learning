import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import InputTextField from './components/inputTextField';

export default function App() {
  return (
    <View style={{marginTop:60,alignItems:'center', justifyContent:'center'}}>
      <View>
        <Image source={require('./assets/logo.png')}/>
        <Text style={[styles.text,{marginTop:10,fontSize:22,fontWeight:'600'}]}>Vermo</Text>
      </View>
      <View style={{marginTop:48, flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Image source={require('./assets/facebook.png')} style={styles.socialLogo}/>
            <Text style={styles.text}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Image source={require('./assets/google.png')} style={styles.socialLogo}/>
            <Text style={styles.text}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>
        <Text style={[styles.text,{color:'#ABB48D',fontSize:15,textAlign:'center',marginVertical:20}]}>Or</Text>
        <View style={{justifyContent:'flex-start',width:'90%'}}>
            <InputTextField title={'email'}/>
            <InputTextField title={'password'}/>
        </View>
        <Text style={[styles.text,styles.link,{textAlign:'right'}]}>Forgot Password</Text>
        <TouchableOpacity style={styles.submitContainer}>
          <Text style={[styles.text,{color:'#fff',fontWeight:'600',fontSize:16}]}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.text,{fontSize:14,color:'#abb48d',textAlign:'center',marginTop:24}]}>
          Don't have account?<Text style={[styles.text,styles.link]}> Register Now</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color:'#1d2029'
  },
  socialButton:{
    flexDirection:'row',
    marginHorizontal:12,
    paddingVertical:12,
    paddingHorizontal:30,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'rgba(171,180,189,0.65)',
    borderRadius:4,
    backgroundColor:'#fff',
    shadowColor:'rgba(171,280,189,0.35)',
    shadowOffset:{width:0,height:10},
    shadowOpacity:1,
    shadowRadius:20,
    elevation:5,
  },
  socialLogo:{
    width:16,
    height:16,
    marginRight:8
  },
  link:{
    color:'#ff1654',
    fontSize:14,
    fontWeight:'500'
  },
  submitContainer:{
    width:'90%',
    backgroundColor:'#ff1654',
    fontSize:16,
    borderRadius:4,
    paddingVertical:12,
    marginTop:32,
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'rgba(255,22,84,0.24)',
    shadowOffset:{width:0,height:0},
    shadowOpacity:1,
    shadowRadius:20
  }
});
