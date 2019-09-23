import { TouchableOpacity, Text, View, ScrollView, FlatList } from 'react-native';
import React, { Component } from "react";
import Style from "./style";
import BookItem from "../BookItem";

export default class BookList extends Component {

    constructor(props){
        super(props)
        
        this.renderBooks = this.renderBooks.bind(this);
    }

    renderBooks = ({item}) => (
        <BookItem
            progress={item.progress}
            title={item.title}
            image={item.image}
        ></BookItem>
    )

    render(){
        return(
            <View style={Style.container}>

                <ScrollView style={{ marginBottom: 50 }}>

                    <FlatList
                        numColumns={1}
                        data={this.props.books}
                        renderItem={this.renderBooks}
                        keyExtractor={item => item.title}
                    />

                </ScrollView>

            </View>
        )
    }
}
