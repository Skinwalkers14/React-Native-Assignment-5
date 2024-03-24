import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Our To-Do List App</Text>
      <Text style={styles.description}>
        Our To-Do List app helps you stay organized and manage your tasks
        efficiently. Whether you're juggling work projects, household chores, or
        personal goals, our app is here to streamline your task management process.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  developers: {
    marginBottom: 10,
  },
  version: {
    marginBottom: 10,
  },
  contact: {
    color: '#888',
  },
});

export default AboutScreen;
