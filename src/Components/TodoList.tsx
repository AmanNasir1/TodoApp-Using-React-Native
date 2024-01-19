import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'
import { TodoItem } from '../../App'


  
  const TodoList = ({ text,todoId,deleteTodo }: TodoItem & {todoId:number,deleteTodo: (index: number) => void}) => {
    return (

        <View style={styles.todos}>
            <Text style={styles.todo}>{text}</Text>
            <View style={styles.TodoBtnContainer} >

                <Button title="Edit" color='black' />
                <Button title="Delete" onPress={()=>deleteTodo(todoId)} color='black' />
            </View>
        </View>
    )

}

export default TodoList


const styles = StyleSheet.create({
    todos: {
        padding: 10,
        backgroundColor: "silver",
        margin: 4,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    todo: {
        fontSize: 16,
        color: "black",
    },
    TodoBtnContainer: {
        flexDirection: "row",
        justifyContent: 'space-between'

    }

})