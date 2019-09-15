import React from 'react'
import { Alert, Text } from 'react-native'

import { TextBase, TextHighLight } from "../../Styles/Presets";
import TextHighLights from "../../Componenta/read/TextHighLight";

module.exports.LerelContent = props => {

    const cleanText = props.children;

    let getHighLight = expression => {

        let highLightList = [], textList = []
        let termCurrent  = '',
            typeCurrent  = '',
            valueCurrent = '',
            highLightCurrent = ''
    
        while( /##\((.*?){(.*?)}\)/g.exec(expression) !== null ){

            highLightCurrent = /##\((.*?){(.*?)}\)/g.exec(expression)
            
            termCurrent   = highLightCurrent[0]
            typeCurrent   = highLightCurrent[1]
            valueCurrent  = highLightCurrent[2]
    
            highLightList.push({
                term: termCurrent,
                type: typeCurrent,
                value: valueCurrent
            })
            
            textList.push(expression.split(termCurrent)[0].replace(/\s+$/, '').replace(/^\s/, '')) // replaces -> remove primeiro e ultimo espaço vazio
            expression = expression.split(termCurrent).slice(1).join(termCurrent) // slice e join -> para dar split apenas na primeira ocorrencia
    
            if(/##\((.*?){(.*?)}\)/g.exec(expression) == null){
                textList.push(expression.replace(/^\s/, '').replace(/\s+$/, '')) // replaces -> remove primeiro e ultimo espaço vazio
            }
    
        }
    
        return { highLightList, textList }
    
    }

    let renderTextHighLight = (highLightList, textList) => {

        highLightList = highLightList.map( (highLightObject, index) => <TextHighLight key={index}>{highLightObject.value}</TextHighLight>)

        let textFormated = textList.map( (text, index) => {

                return [text, highLightList[index]]
        })

        return <TextBase> {textFormated}</TextBase> 
    }

    let renderText = (cleanText) => {
        
        if( /##\((.*?){(.*?)}\)/g.exec(cleanText) == null ) return cleanText

        let { highLightList, textList } = getHighLight(cleanText);
        let highLightListFormated       = renderTextHighLight(highLightList, textList);

        return <TextBase>{ highLightListFormated }</TextBase> 
    }

    let renderedText = renderText(cleanText[1])

    return (
        <TextBase>
            { renderedText }
        </TextBase>
    )
    
}
