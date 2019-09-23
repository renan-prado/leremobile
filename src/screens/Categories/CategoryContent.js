import { View, Text, ScrollView, FlatList } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

import BookList from "../../Components/BookList";

import imageNarnia from "../../../assets/images/narnia.png";
import imageMenina from "../../../assets/images/menina-roubava.jpg";
import imageReiLeao from "../../../assets/images/reileao.jpg";
import imageR101 from "../../../assets/images/101-dalmatians.jpg";
import imageBela from "../../../assets/images/a-bela-e-a-fera.jpeg";

export default class CategoryContent extends Component {

    constructor(props){
        super(props)

        this.booksCategory = [
            {
                title: 'A bela e a fera',
                progress: 20,
                image: imageBela
            },

            {
                title: 'A menina que roubava livros',
                progress: 80,
                image: imageMenina
            },

            {
                title: 'Narnia',
                progress: 80,
                image: imageNarnia
            },

            {
                title: '101 Dalmatas',
                progress: 0,
                image: imageR101
            },

            {
                title: 'O rei leão',
                progress: 0,
                image: imageReiLeao
            }
        ];

    }

    render(){
        return(
            <View style={[Style.homeContent]} >
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BookList books={this.booksCategory} />
                </ScrollView>

            </View>
        )
    }
}
