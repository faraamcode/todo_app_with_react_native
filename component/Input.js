import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function Input ({ setTodo }) {
  const [input, setInput] = useState('')

  const addTodo = () => {
    setTodo(prevTodo => [
      ...prevTodo,
      { item: input, key: Math.random().toString() }
    ])
    setInput('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderText='add new Todo'
          style={styles.input}
          defaultValue={input}
          onChangeText={val => setInput(val)}
        />
      </View>
      <Button title='Add new' onPress={addTodo} color='coral' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 15,
    paddingHorizontal: 10
  },
  inputContainer: {
    marginBottom: 10
  }
})
