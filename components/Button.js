import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ submitTodo }) => (    
  <View style={styles.buttonContainer}>
{/*       
    <TouchableHighlight
      underlayColor='#efefef'
      onPress={submitTodo}>    
      
      <Text style={styles.submit}>
        Submit
      </Text>
    </TouchableHighlight> */}
             <TouchableHighlight style={styles.button} underlayColor = {'#efefef'}   onPress={submitTodo}>
            <Text style = {styles.submit}>
               Submit 
            </Text>
         </TouchableHighlight>

  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#0a004d',
    
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius : 10,
  },
  submit: {
    color: '#fff',
    fontWeight: 'bold',
  }
})

export default Button
