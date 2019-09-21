import React from 'react'
import { 
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";


module.exports.DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );