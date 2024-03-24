/**
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';
export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
     setTasks([...tasks, taskText]);
    };
  return (
    <SafeAreaView style={styles.container}> 
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
