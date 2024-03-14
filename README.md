# Skin care App UI-screen 2 

<img width="300px" src="skincareapp-ui-2-screenshot-1.jpg.jpg" alt="image_name png" />

The project was created as part of learning React Native tutorial from the youtube channel 
Tugane Amiel:

https://www.youtube.com/watch?v=_fxpc_xyV4A

## Learning

### Airbnb rating

```cmd

```
adding rating
```js
import { AirbnbRating } from "react-native-ratings";

<AirbnbRating
              showRating={false}
              size={20}
              selectedColor={Colors.text}
              defaultRating={Products[0].rating}
/>
```

### Saving and using FontSize and Spacing parameters

#### Font Size
```js
const xs= 12;
cons``t sm= 14;
const base= 16;
const lg= 20;
const xl= 30;
const xxl= 35;

export default {
  xs,
  sm,
  base,
  lg,
  xl,
  xxl,
};
```

#### Spacing
```js
const sm = 5;
const base = 10;
const lg = 20;
const xl = 30;
const xxl = 40;
export default {
  padding: {
    xs: 5,
    sm: 10,
    base: 15,
    lg: 30,
    xl: 50,
    xxl: 70,
  },
  margin: {
    sm,
    base,
    lg,
    xl,
    xxl,
  },
  borderRadius: { sm, base, lg, xl, xxl },
};
```

#### Using fontSize and spacing example
```css
padding:Spacing.padding.base,

fontSize: FontSize.base,
```

### Masonry List
Install Masonry list
```cmd
npm i @react-native-seoul/masonry-list
```
Usage
```js
import MasonryList from "@react-native-seoul/masonry-list";

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
```

### Searching

```js
const [search, setSearch] = useState("");
  const [results, setResults] = useState(Products);
  useEffect(()=>{
    setResults(Products.filter(product=>product.title.includes(search)))
  },[search])
```

### Challenges faced

1. Masonry list wasnot loading due to some typo

### Learning further

1. Analyse why MasonryList is required, why not Flatlist?
