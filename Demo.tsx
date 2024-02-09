import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet, Platform, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, resetProducts } from './redux/productSlice';
// import { decrement, increment } from './redux/countSlice';
import Images from './assets';
import { arrCart, increaseCount } from './redux/addToCartSlice';
import { useTheme } from './contextApi/darkModeContext';


const DemoApp = ({navigation}:any) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => (state as any).product);
  const{isDarkMode, toggleTheme, colors}=useTheme()
  // const countValue = useSelector((state) => (state as any).countFromStore)
  const cart=useSelector((state)=>(state as any).addTocart)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const items = [1, 2, 3];
  console.log(items); 
  
  const reversedItems = items.with(1,4);
  console.log(reversedItems); 


  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colors.background }}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <Text onPress={() => {dispatch(resetProducts())}}>reset</Text>
        <Text onPress={toggleTheme}>change color</Text>
        <Pressable style={{width:"50%",alignSelf:'flex-end'}} onPress={()=>{navigation.navigate("Cart"),console.log('first')}}>
          <Image
            source={Images.cart} style={{ height: 40, width: 40, alignSelf: "flex-end", marginRight: 20 }} />
          {cart.count>0&&
            <View style={{borderRadius:20,backgroundColor:"red",position:"absolute",alignSelf:"flex-end",width:25,height:25,right:20,bottom:20}}>
            <Text style={{textAlign:"center",lineHeight:25}}>{cart.count}</Text>
            </View>
          }
        </Pressable>
        {products.data?.map((_item: any, index: React.Key | null | undefined) => (
          <View key={index} style={[styles.imgStyle, styles.box]}>
            <Image source={{ uri: _item.image }} style={{ height: 80, width: 80, borderRadius: 10 }} />
            <View style={{ width: "80%", paddingHorizontal: 10 }}>
              <Text>{_item.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: 5 }}>
                <Text>{_item.price}</Text>
                <Pressable onPress={() => {dispatch(increaseCount()),dispatch(arrCart(_item))}}
                  style={[{ backgroundColor: "red", padding: 5, marginRight: 10, borderRadius: 10 }, styles.box]}>
                  <Text style={{ color: 'white', textAlign: "center" }}>Add to cart</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DemoApp;

const styles = StyleSheet.create({
  imgStyle: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-start"
    , alignItems: 'center',
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  box: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 5,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
    }),
  },
  addIcon: {
    width: 30,
    height: 30,
    backgroundColor: "gray",
    color: 'white',
    textAlign: "center",
    lineHeight: 30,
    borderRadius: 10
  }
})