import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { YellowBox } from 'react-native';

import Read from "./src/Screens/Read";
import FirebaseApp from "./src/Screens/Firebase";
import Home from "./src/Screens/Home";

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#444444" barStyle="light-content"/>
      <SafeAreaView style={styles.container}>

        <Read />

        {/* <Home /> */}

        {/* <FirebaseApp /> */}
      
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
