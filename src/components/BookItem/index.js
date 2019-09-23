import { ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

import ProgressBar from "../ProgressBar";
import { BookTitle } from "../../Styles/Patterns";

export default class BookItem extends Component {

    render(){
        return(
            <TouchableWithoutFeedback>
                <View style={{ width: 180, marginRight: 20, alignItems: 'center' }}>

                    <View style={Style.bookItem}>
                        <ImageBackground
                            style={{ width: '100%', height: '100%' }}
                            source={this.props.image}
                        ></ImageBackground>
                    </View>

                    {
                        this.props.progress
                        ? <ProgressBar progress={this.props.progress} />
                        : null
                    }
                    
                    <BookTitle style={{ marginBottom: 30, paddingHorizontal: 10 }}> { this.props.title } </BookTitle>

                </View>
            </TouchableWithoutFeedback>
        )
    }
}
