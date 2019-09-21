import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';

// Config
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from './src/Reducers/'
import { YellowBox } from 'react-native';

import Read from "./src/Screens/Read";
import FirebaseApp from "./src/Screens/Firebase";
import Home from "./src/Screens/Home";

const store = createStore(Reducers);

const App = () => {
  return (
    <Provider store={store}>  
      <Fragment>
        <StatusBar translucent={true} backgroundColor="#ffffff00" barStyle="light-content"/>

        <Home statusBarHeight={StatusBar.currentHeight} />
        
      </Fragment>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

YellowBox.ignoreWarnings(['Setting a timer']);

export default App;
