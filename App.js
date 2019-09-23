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
import BookView from "./src/Screens/BookView";
import Categories from "./src/Screens/Categories";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Perfil from "./src/Screens/Perfil";

import Colors from './src/Styles/Colors'
import DrawerMenu from "./src/Screens/DrawerMenu";

const drawer = createDrawerNavigator({

  Home: {
    screen: Home,
  },

  Read: {
    screen: Read
  },

  BookView: {
    screen: BookView
  },

  Categories: {
    screen: Categories
  },

  Perfil: {
    screen: Perfil
  },

  Login: {
    screen: Login,
    navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
  },

  SignUp: {
    screen: SignUp,
    navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
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
