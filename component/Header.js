import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header () {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> My Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    backgroundColor: 'coral',
    height: 120,
    marginBottom: 15
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
