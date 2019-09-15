import { StyleSheet, Text, Alert } from 'react-native';
import React from "./node_modules/react";
import Colors from "./Colors";
import Fonts from "./Fonts";
import Sizes from "./Sizes";

const textValues = {
    
    TEXT_TITLE: {
        fontFamily: Fonts.ROBOTO,
        fontSize: Sizes.FONT_TITLE,
        fontWeight:  'bold',
        color: Colors.TEXT_PRIMARY
    },

    TEXT_READ: {
        fontFamily: Fonts.ROBOTO,
        fontSize: Sizes.FONT_BASE,
        color: Colors.TEXT_PRIMARY,
        lineHeight: 25,
        textAlign: 'justify'
    },

    TEXT_HIGH_LIGHT: {
        fontFamily: Fonts.ROBOTO,
        fontSize: Sizes.FONT_BASE,
        color: Colors.BLUE,
        lineHeight: 25,
        fontWeight:  'bold',
    },
}

const textStyles = StyleSheet.create({
  
    textTitle: {
      ...textValues.TEXT_TITLE,
      marginTop: 30,
      marginBottom: 40
    },
  
    textRead: {
      ...textValues.TEXT_READ,
    },
  
    textHighLight: {
      ...textValues.TEXT_HIGH_LIGHT,
    }
  
  });


module.exports.textStyles = textStyles
module.exports.TextTitle = props => <Text style={textStyles.textTitle}> { props.children } </Text>
module.exports.TextBase = props => <Text selectable={true} style={textStyles.textRead}> { props.children } </Text>
module.exports.TextHighLight = props => <Text onPress={() => Alert.alert('Info Word')} style={textStyles.textHighLight}> { props.children } </Text>