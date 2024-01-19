import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import TodoList from './src/Components/TodoList'

export interface TodoItem {
  text: string,
}


const App = () => {
  const [todoInput, setTodoInput] = useState('')
  const [Todos, setTodos] = useState<TodoItem[]>([])

  const handleSubmit = () => {
    if (todoInput !== '') {
      const todoItem: TodoItem = {
        text: todoInput
      }
      setTodos([...Todos, todoItem])
      setTodoInput('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={text => setTodoInput(text)} />
        <TouchableOpacity style={styles.addTaskBtn} onPress={handleSubmit}><Text style={styles.addTodoBtnText}>Add Task</Text></TouchableOpacity>
      </View>
        <FlatList data={Todos} renderItem={({ item }) => <TodoList text={item.text} />} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 35,
  },
  input: {
    color: 'black',
    borderRadius: 8,
    borderWidth: 3,
    paddingLeft: 8,
    width: 230,
    fontSize: 15
  },
  heading: {
    fontSize: 35,
    marginBottom: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: 'black'

  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20

  },
  addTaskBtn: {
    backgroundColor: 'black',
    width: 80,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTodoBtnText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 15
  }
  

})
// import React from 'react';
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation, route }: { navigation: any, route: any }) {
//   // return (
//   //   <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//   //     <Text>Home Screen</Text>
//   //     <Button title='Go to Details' onPress={() => navigation.navigate('Details', { itemId: 86, otherParams: 'anything you want here' })} />
//   //   </View>
//   // )

//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }


// function CreatePostScreen({ navigation, route }: { navigation: any, route: any }) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass and merge params back to home screen
//           navigation.navigate({
//             name: 'Home',
//             params: { post: postText },
//             merge: true,
//           });
//         }}
//       />
//     </>
//   );
// }


// function DetailsScreen({ route, navigation }: { navigation: any, route: any }) {
//   const { itemId, otherParams } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>ItemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParams: {JSON.stringify(otherParams)} </Text>
//       <Button title='Go to Details... again' onPress={() => navigation.push('Details', { itemId: Math.floor(Math.random() * 100) })} />
//       <Button title="Go to Home" onPress={() => navigation.popToTop()} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator()

// function App() {


//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home' >
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({

// });

// export default App;
