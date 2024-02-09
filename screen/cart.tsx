import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, removeCart } from '../redux/addToCartSlice'

const Cart = ({navigation}:any) => {
  const dispatch=useDispatch()
  const cart=useSelector((state)=>(state as any).addTocart)
  
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
     <Text onPress={()=>navigation.goBack()}>Back</Text>
      <FlatList
      data={cart.data}
      numColumns={2}
      keyExtractor={(item)=>item}
      renderItem={(item:any)=>{
        
        return(
          <View style={{padding:5,width:"45%",justifyContent:"center",alignItems:"center",marginHorizontal:10,borderWidth:0.5,borderRadius:5}}>
          <Image source={{uri:item.item.image}} style={{width:'100%',height:100}}/>
          <Text style={{height:70}}>{item.item.title}</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
           <Text onPress={()=>{dispatch(removeCart(item.item)),dispatch(decrementCount())}}>Remove</Text>
           <View style={{flexDirection:"row",justifyContent:'flex-start',alignItems:"center"}}>
               <Text  style={styles.addIcon}>+</Text>
               <Text style={{marginHorizontal:10}}>1</Text>
               <Text  style={styles.addIcon}>-</Text>
              </View>
          </View>
          </View>
        )
      }}
      />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
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