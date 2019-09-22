import React from 'react'
import { 
    Keyboard,
    TouchableWithoutFeedback,
    Text
} from "react-native";

import Colors from "./Colors";

module.exports.DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

module.exports.Subtitle = ({ children, textColor = "#ffffff", style = {} }) => (
  <Text 
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

module.exports.BookTitle = ({ children, textColor = Colors.BLUE_DARK_BRIGHTNESS, style = {} }) => (
  <Text 
    numberOfLines={2}
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