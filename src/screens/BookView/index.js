import React, { Component } from 'react'
import { 
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    ScrollView

} from "react-native";

import Style from "./style";

import imageBela from "../../../assets/images/a-bela-e-a-fera.jpeg";
import imageNarnia from "../../../assets/images/narnia.png";
import imageMenina from "../../../assets/images/menina-roubava.jpg";
import imageReiLeao from "../../../assets/images/reileao.jpg";
import imageR101 from "../../../assets/images/101-dalmatians.jpg";

import imageArrowBack from "../../../assets/images/arrow-back.png";
import imageFavorite from "../../../assets/images/favorite.png";
import imageView from "../../../assets/images/view.png";
import imageLike from "../../../assets/images/like.png";

import { Title, Subtitle, TextBase, ButtonLere } from "../../Styles/Patterns";
import LoremIpsum from "../../Components/LoremIpsum";

class BookView extends Component {

    constructor(props){
        super(props)
  
    }   

    render(){
        return (
            <View style={Style.container}>
                
                {/* <View style={Style.header}></View> */}

                <View style={Style.header}>
                    <ImageBackground 
                        style={{ width: '100%', height: '100%' }}
                        source={imageMenina}
                    >

                        <View style={Style.headerContainerOpacity}>

                            <View style={[Style.headerContainerTop, { marginTop: StatusBar.currentHeight }]}>

                                <TouchableOpacity>
                                    <Image 
                                        style={Style.arrowBack}
                                        source={imageArrowBack}
                                    />
                                </TouchableOpacity>

                                
                                <TouchableOpacity>
                                    <Image 
                                        style={Style.arrowFavorite}
                                        source={imageFavorite}
                                    />
                                </TouchableOpacity>

                            </View>

                        </View>

                    </ImageBackground>
                </View>

                <View style={Style.bookContent}>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Title>A bela e a fera lorem ipsum lorem ipsum lorem</Title>

                        {/* bookContent Title and Info */}
                        <View style={Style.bookContentInfo}>

                            <Text style={Style.bookContentInfoAuthor}>Mariana Paes</Text>
                            
                            <View style={Style.bookContentStats}>
                                <View style={Style.bookContentStatsItem}>
                                    <Image
                                        style={Style.bookContentStatsItemIconView}
                                        source={imageView}
                                    />        
                                    <Text style={Style.bookContentStatsItemText}>20k</Text>
                                </View>

                                <View style={Style.bookContentStatsItem}>
                                    <Image
                                        style={Style.bookContentStatsItemIconLike}
                                        source={imageLike}
                                    />        
                                    <Text style={Style.bookContentStatsItemText}>84%</Text>
                                </View>
                            </View> 

                        </View>

                        <ButtonLere
                            title="Adicionar à prateleira"
                            style={{ marginTop: 40 }} />

                        {/* Sinopse */}
                        <View style={Style.sinopse}>

                            <View style={Style.sinopseHeader}>    
                                <Subtitle style={Style.sinopseTitle}>Sinopse</Subtitle>
                                <View style={Style.sinopseInteractives}></View>
                            </View>

                            <TextBase>{ LoremIpsum.generateParagraphs(5) }</TextBase>

                        </View>

                        
                        <ButtonLere
                            title="Adicionar à prateleira"
                            style={{ marginTop: 40, marginBottom: 50 }} />


                    </ScrollView>

                </View> 

            </View>
        )
    }
}

export default BookView