import React from 'react'
import { 
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    View
} from "react-native";

import Colors from "./Colors";

module.exports.DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

module.exports.Title = ({ children, textColor = Colors.BLUE_DARK_BRIGHTNESS, style = {}, numberOfLines = 2 }) => (
  <Text
    numberOfLines={numberOfLines}
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: textColor,
      ...style
    }}
  >
    {children}
  </Text>
)

module.exports.Subtitle = ({ children, textColor = Colors.BLUE_DARK_BRIGHTNESS, style = {}, numberOfLines = 2 }) => (
  <Text  
    numberOfLines={numberOfLines}
    style={{
      fontSize: 25,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: textColor,
      ...style
    }}
  >
    {children}
  </Text>
)

module.exports.BookTitle = ({ children, textColor = Colors.BLUE_DARK_BRIGHTNESS, style = {}, numberOfLines = 2 }) => (
  <Text 
    numberOfLines={numberOfLines}
    style={{
      width: '100%',
      fontSize: 17,
      letterSpacing: 1,
      color: textColor,
      textAlign: "center",
      ...style
    }}
  >
    {children}
  </Text>
)

module.exports.TextBase = ({ children, textColor = Colors.TEXT_PRIMARY, style = {} }) => (
  <Text 
    style={{
      width: '100%',
      fontSize: 16,
      letterSpacing: 1,
      color: textColor,
      textAlign: 'justify',
      ...style
    }}
  >
    {children}
  </Text>
)

module.exports.ButtonLere = ({ title, style={}, onPress = () => null}) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View
      color={Colors.PRIMARY}
      style={{
        width: '100%',
        height: 40,
        borderRadius: 5,
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.WHITE,
        ...style
      }}
    >
      <Text style={{ color: Colors.WHITE }}> {title.toUpperCase()} </Text>
    
    </View>
  </TouchableOpacity>
)