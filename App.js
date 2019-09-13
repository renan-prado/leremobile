import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { YellowBox } from 'react-native';

import Read from "./src/screens/Read";
import FirebaseApp from "./src/screens/Firebase";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.container}>

        {/* <Read /> */}

        {/* <Home /> */}

        <FirebaseApp />
      
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

YellowBox.ignoreWarnings(['Setting a timer']);

export default App;
