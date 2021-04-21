import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Make Your Day Busy
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom : 30
  },
  headerText: {
    textAlign: 'center',
    fontSize: 34,
    color: '#24424f',
    fontWeight: '100'
  }
})

export default Heading