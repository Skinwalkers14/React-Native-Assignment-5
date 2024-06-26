import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../Components/Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MainLayout;
