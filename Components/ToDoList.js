/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';
import MainLayout from '../Layouts/MainLayout';

function ToDoList({ tasks }) {
  return (
    <MainLayout>
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text> 
          </View>
        </Pressable>
      ))}
    </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  task: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;