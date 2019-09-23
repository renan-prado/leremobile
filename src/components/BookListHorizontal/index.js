import { TouchableOpacity, Text, View, ScrollView, FlatList } from 'react-native';
import React, { Component } from "react";
import Style from "./style";
import { Subtitle } from "../../Styles/Patterns";
import BookItem from "../BookItem";

export default class BookListHorizontal extends Component {

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

                <View style={Style.topArea}>    
                    <Subtitle style={Style.subtitle}>
                        { this.props.section.title }
                    </Subtitle>

                    <TouchableOpacity>
                        <Text style={Style.seeMore}> Ver mais </Text>
                    </TouchableOpacity>

                </View>

                <ScrollView horizontal={true} style={{ marginBottom: 50 }}>

                    <FlatList
                        horizontal={true}
                         data={this.props.section.books}
                         renderItem={this.renderBooks}
                         keyExtractor={item => item.title}
                    />

                </ScrollView>

            </View>
        )
    }
}
