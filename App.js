import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import CoinItem from './components/CoinItem'

export default function App() {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const loadData = ()=>{
       fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      .then(response => response.json())
      .then(data =>{
         setCoin(data)
      })}
   useEffect(()=>{
      loadData()
      },[])
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%', marginBottom:10}}>
        <Text style={styles.title}>CriptoMarket </Text>
        <TextInput style={styles.searchInput} placeholder='search a coin' placeholderTextColor={'#858585'} onChangeText={text => setSearch(text)}/>
      </View>
      <FlatList refreshing={refreshing} onRefresh={async()=>{setRefreshing(true)
         await loadData();
          setRefreshing(false)}  
    } style={styles.list} data={coin.filter((coins) => coins.name.includes(search) || coins.symbol.includes(search))} renderItem={({item})=>{
         return <CoinItem coin={item}/>}} showsVerticalScrollIndicator={false}/>
         
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#141414',
    alignItems:'center',
    flex:1 
  },
  title:{
    color: 'white',
    marginTop:10,
    fontSize:20
  },
  list:{
    width:'90%'
  },
  searchInput:{
    backgroundColor:'#6a6e73',
    color:'white',
    borderBottomColor:'#4657CE',
    borderBottomWidth:1,
    width:'45%',
    borderRadius: 3,
    top:3,
    textAlign:'center'
    

    
  }
})