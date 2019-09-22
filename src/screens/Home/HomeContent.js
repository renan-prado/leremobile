import { View, Text, ScrollView } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

import BookListHorizontal from "../../Components/BookListHorizontal";


export default class Header extends Component {

    render(){
        return(
            <View style={[Style.homeContent]} >
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <BookListHorizontal title="Meus livros"/>
                    <BookListHorizontal title="Promoção"/>
                    <BookListHorizontal title="Drama"/>
                    <BookListHorizontal title="Ficção"/>
                    <BookListHorizontal title="Queridinhos"/>
                    <BookListHorizontal title="Romance <3"/>
                    <BookListHorizontal title="Terror"/>
                    <BookListHorizontal title="Super Interativos"/>
                    <BookListHorizontal title="Motivacionais"/>
                    <BookListHorizontal title="Comédia"/>
                    <BookListHorizontal title="Saúde"/>

                </ScrollView>

            </View>
        )
    }
}
