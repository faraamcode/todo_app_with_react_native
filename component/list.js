import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function List ({ item, setTodo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          setTodo(prevTodo => prevTodo.filter(list => list.key != item.key))
        }
      >
        <AntDesign name='delete' size={24} />
      </TouchableOpacity>
      <Text style={styles.text}>{item.item}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 10,
    flexDirection: 'row'
  },
  text: {
    marginLeft: 10
  }
})
