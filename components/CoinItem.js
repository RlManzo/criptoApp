import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CoinItem({coin}) {
  return (
    <View style={styles.containerItem}>
    <View style={styles.containerImg}> 
    <Image style={styles.image} source={{uri: coin.image}}/>
    <View style={{marginLeft:10}}>
      <Text style={styles.text}>{coin.name}</Text>
      <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View> 
    <View>
    <Text style={{color:'white', textAlign:'right'}}>${coin.current_price}</Text>
    <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>{coin.price_change_percentage_24h}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem:{
    backgroundColor:'#121212',
    paddingTop:10,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  containerImg:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image:{
    width:30,
    height:30
  },
  text:{
    color:'#ffffff'
  },
  textSymbol:{
    color:'#434343',
    textTransform:'uppercase'
  },
  pricePercentage:{
    color:'white',
    textAlign:'right'
  },
  priceUp:{
    color:'green'
  },
  priceDown:{
    color:'#fc4422'
  }
})