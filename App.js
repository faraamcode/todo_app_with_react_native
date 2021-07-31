import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from './component/Header'
import List from './component/list'
import Input from './component/Input'

export default function App () {
  const [todo, setTodo] = useState([
    { item: 'learn react', key: 1 },
    { item: 'learn js', key: 2 },
    { item: 'learn css', key: 3 },
    { item: 'learn rugby', key: 4 },
    { item: 'learn go', key: 5 }
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View>
        {/* form */}
        <Input setTodo={setTodo} />
        <View>
          {/* List */}
          <FlatList
            data={todo}
            renderItem={({ item }) => <List item={item} setTodo={setTodo} />}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
