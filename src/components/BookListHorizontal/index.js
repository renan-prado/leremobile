import { TouchableOpacity, Text, View, ScrollView, Dimensions } from 'react-native';
import React, { Component } from "react";
import Style from "./style";
import { Subtitle } from "../../Styles/Patterns";
import BookItem from "./BookItem";

import imageNarnia from "../../../assets/images/narnia.png";
import imageMenina from "../../../assets/images/menina-roubava.jpg";

export default class BookListHorizontal extends Component {

    render(){
        return(
            <View style={Style.container}>

                <View style={Style.topArea}>    
                    <Subtitle style={Style.subtitle}>
                        { this.props.title }
                    </Subtitle>

                    <TouchableOpacity>
                        <Text style={Style.seeMore}> Ver mais </Text>
                    </TouchableOpacity>

                </View>

                <ScrollView horizontal={true} style={{ marginBottom: 50 }}>

                    <BookItem
                        progress={80}
                        title="A bela e a fera"
                        image={imageNarnia}
                    ></BookItem>
                    
                    <BookItem
                        progress={30}
                        title="A menina que roubava livros"
                        image={imageMenina}

                    ></BookItem>
                    
                    <BookItem
                        progress={10}
                        title="Narnia"
                        image={imageNarnia}

                    ></BookItem>
                    
                    <BookItem
                        progress={0}
                        title="101 Dalmatas"
                        image={imageNarnia}

                    ></BookItem>
                    
                    <BookItem
                        progress={0}
                        title="O rei leão"
                        image={imageNarnia}

                    ></BookItem>

                </ScrollView>

            </View>
        )
    }
}
