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
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Read from "./src/Screens/Read";
import FirebaseApp from "./src/Screens/Firebase";
import Home from "./src/Screens/Home";
import Colors from './src/Styles/Colors'
import DrawerMenu from "./src/Screens/DrawerMenu";

const drawer = createDrawerNavigator({

  Home: {
    screen: Home
  },

  Read: {
    screen: Read
  }

},
  {
    contentComponent: DrawerMenu,
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: Colors.PRIMARY,
      inactiveTintColor: Colors.GREY,
      activeBackgroundColor: 'transparent'
    }
  }
)

const Navigation = createAppContainer(drawer);

const store = createStore(Reducers);

const App = () => {
  return (
    <Provider store={store}>  
      <Fragment>
        <StatusBar translucent={true} backgroundColor="#ffffff00" barStyle="light-content"/>

        <Navigation />
        
      </Fragment>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

console.disableYellowBox = true;

export default App;
