import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { TodoItem } from '../../App'


const TodoList = ({ text }: TodoItem) => {
    return (

            <View style={styles.todos}>
                <Text style={styles.todo}>{text}</Text>
            </View>
    )

}

export default TodoList


const styles = StyleSheet.create({
    todos: {
        padding: 10,
        backgroundColor:"silver",
        margin:4,
        borderRadius:6
    },
    todo: {
        fontSize: 16,
        color: "black"
    }

})