import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import Spacing from "./constants/Spacing";
import FontSize from "./constants/FontSize";
import { user, Products } from "./data";
import { useState, useEffect } from "react";
import MasonryList from "@react-native-seoul/masonry-list";

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(Products);
  useEffect(()=>{
    setResults(Products.filter(product=>product.title.includes(search)))
  },[search])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.searchProductTitle}>Search Product</Text>
          <Image source={user.profile} style={styles.profileImage} />
        </View>
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color={Colors.textGray} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={Colors.text}
              onChangeText={(text) => setSearch(text)}
              defaultValue={search}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: 60,
                width: 60,
                backgroundColor: Colors.primary,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: Spacing.borderRadius.base,
              }}
            >
              <Ionicons name="filter-outline" size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <MasonryList
            data={[{id:0,name:`Found ${results.length} results`},...results]}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item,i }) => (<>
              {
                i==0?<Text style={{fontSize:32,padding:Spacing.padding.base}}>{item.name}</Text>:
              <TouchableOpacity
                style={{
                  padding:Spacing.padding.base,
                  backgroundColor: Colors.primary,
                  width: "90%",
                  margin: Spacing.margin.base,
                  borderRadius:Spacing.borderRadius.xl
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: "100%", height: 220 }}
                />
                <Text style={{fontWeight:'bold',fontSize:FontSize.lg,color:Colors.text}}>{item.title}</Text>
                <Text style={{color:Colors.textGray,marginVertical:Spacing.margin.base}}>{item.subTitle}</Text>
                <View style={{
                  flexDirection:'row',
                  alignItems:'center', 
                  justifyContent:'space-between'
                }}>
                  <Text style={{fontSize:FontSize.lg, fontWeight:'bold'}}>{item.price}</Text>
                  <TouchableOpacity style={{
                    height:35,
                    width:35,
                    backgroundColor:Colors.accent,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:Spacing.borderRadius.xl
                  }}>
                    <Ionicons name="heart" size={20} color={Colors.onAccent}/>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              }
            </>
            )}
          />
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
    justifyContent: "space-around",
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
