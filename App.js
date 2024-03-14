import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "react-native-vector-icons";
import Colors from "./constants/Colors";
import { user, Products } from "./data";
import FontSize from "./constants/FontSize";
import Spacing from "./constants/Spacing";
import Font from "./constants/Font";
import { AirbnbRating } from "react-native-ratings";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="grid-outline" size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>
        <Image
          source={Products[1].cover}
          style={{
            width: "95%",
            height: 350,
            margin: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.base,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginVertical: Spacing.margin.sm,
          }}
        >
          {Products[0].ingredients.map((ingredient) => (
            <View
              style={{
                backgroundColor: Colors.primary,
                padding: Spacing.padding.base,
                borderRadius: Spacing.borderRadius.xxl,
                alignItems: "center",
              }}
            >
              <Image
                source={ingredient.image}
                style={{ height: 50, width: 70 }}
              />
              <Text
                style={{
                  color: Colors.textGray,
                  marginVertical: 10,
                }}
              >
                {ingredient.name}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            backgroundColor: Colors.primary,
            padding: Spacing.padding.sm,
            borderTopLeftRadius: Spacing.borderRadius.xxl,
            borderTopRightRadius: Spacing.borderRadius.xxl,
            marginTop:20,
          }}
        >
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
            <View style={{padding:10}}>
              <Text style={{ fontSize: FontSize.lg}}>{Products[0].title}</Text>
              <Text style={{color:'grey'}}>Size: {Products[0].size}</Text>
            </View>
            <View>
            <AirbnbRating
              showRating={false}
              size={20}
              selectedColor={Colors.text}
              defaultRating={Products[0].rating}
            />
            <Text>({Products[0].reviewsCount} Reviews)</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
            <Text style={{fontSize:FontSize.lg,fontWeight:'bold'}}>{Products[0].price}</Text>
            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:Colors.text,borderRadius:Spacing.padding.sm}}>
            <TouchableOpacity style={{padding:Spacing.padding.sm}}>
              <Ionicons name='remove-outline' color={Colors.textGray} size={20}/>
            </TouchableOpacity>
            <TextInput style={{fontSize:FontSize.base,paddingHorizontal:Spacing.padding.sm}} value="1"/>
            <TouchableOpacity>
              <Ionicons name='add' color={Colors.textGray} size={20}/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
              backgroundColor:Colors.accent,
              padding:8,
              borderRadius:Spacing.borderRadius.base
            }}>
              <Text style={{
                color:Colors.onAccent,fontSize:FontSize.lg
              }}>Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.padding.base,
    alignItems: "center",
  },
  searchProductTitle: {
    fontSize: FontSize.lg,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: Spacing.borderRadius.base,
  },
  search: {
    margin: Spacing.margin.lg,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: Spacing.padding.base,
    borderRadius: Spacing.borderRadius.base,
    width: "80%",
    height: 60,
  },
  searchInput: {
    fontSize: FontSize.base,
    color: Colors.text,
    marginLeft: Spacing.margin.base,
  },
});
