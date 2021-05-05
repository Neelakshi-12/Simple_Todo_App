import React, { Component } from 'react'
import { View, ScrollView, StyleSheet ,Image,Text} from 'react-native'
import firebase from '../database/firebase';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0
// let addItem = item => {
//     db.ref('/items').push({
//       name: item
//     });

//     // firebase.set({
//     //     name : item,
//     // })
//   };
  

class Home extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
      uid: '',

      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uids
    }
    this.submitTodo = this.submitTodo.bind(this) 
    this.toggleComplete = this.toggleComplete.bind(this)    
    this.deleteTodo = this.deleteTodo.bind(this)    
    this.setType = this.setType.bind(this)
  }
  // deleteUser() {
  //   const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
  //     dbRef.delete().then((res) => {
  //         console.log('Item removed from database')
  //         this.props.navigation.navigate('UserScreen');
  //     })
  // }

  
  deleteTodo (todoIndex) {    
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  setType (type) {
    this.setState({ type })
  }
  toggleComplete (todoIndex) {    
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  inputChange(inputValue) {    
    console.log(' Input Value: ' , inputValue)    
    this.setState({ inputValue })    
  }
//   handleSubmit = () => {
//     addItem(this.state.inputValue);
//     alert('Item saved successfully');
//   };
  // submitTodo () {    
  //   if (this.state.inputValue.match(/^\s*$/)) { 
  //     return
  //   //  var myFirebaseRef = new Firebase('https://reactnativefirebase-693b4.firebaseapp.com');
     
  //   //  myFirebaseRef.set({
  //   //      title : 'Neelakshi',
  //   //      author : 'shubham'
  //   //  });  
  //   }  
  //   addItem(this.state.inputValue);   
   
  //   const todo = {    
  //     title: this.state.inputValue,    
  //     todoIndex,    
  //     complete: false    
  //   }    
  //   todoIndex++    
  //   const todos = [...this.state.todos, todo]    
  //   this.setState({ todos, inputValue: '' }, () => {    
  //     console.log('State: ', this.state)    
  //   }) 
  // }
  submitTodo () {    
    if (this.state.inputValue.match(/^\s*$/)) {    
      return    
    }    
    alert ('added!!');  
    const todo = {    
      title: this.state.inputValue,    
      todoIndex,    
      complete: false    
    }    
    todoIndex++    
    const todos = [...this.state.todos, todo]    
    this.setState({ todos, inputValue: '' }, () => {    
      console.log('State: ', this.state)    
    }) 
  }
  
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
    

  render () {
    
    const { todos, inputValue, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
         
        <Text style = {styles.textStyle}>
       {this.state.displayName}!
      </Text>
          <Input inputValue={inputValue} 
                 inputChange={(text) => this.inputChange(text)} />
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} />
          <Button submitTodo={this.submitTodo } />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
     
      </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce3e6'
  },
  content: {
    flex: 1,
    paddingTop: 20
  },
  textStyle: {
    fontSize: 24,
    color: '#24424f',
    marginBottom: 20,
    textAlign:'center'
  }
})

export default Home