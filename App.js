import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Read from "./src/screens/Read";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.container}>

        {/* <Read /> */}

        <Home />
      
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
