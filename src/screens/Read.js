import React, { Component, useState } from 'react'
import { 
    StyleSheet,
    View,
    Animated,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
    Alert,
    Button

} from "react-native";

import Colors from "../Styles/Colors";
import helperButton from "../../assets/images/read_chat_black.png";
import { TextBase, TextTitle } from "../Styles/Presets";
import { LerelContent } from "../methods/readArea/readAreaMethods";
import Firebase from "../Database/Firebase";
import { connect } from "react-redux";
import { editEmail } from "../Actions/AuthActions";


class Read extends Component {

    constructor(props){
        super(props)

        this.state = {
            helperButton: 1,
            modalVisible: false,
            contentText: '',
            pageTitle: ''
        }

        this.animatedOpacity = new Animated.Value(0)
        this.backgroundColor = new Animated.Value()

        this.onScrollStart = this.onScrollStart.bind(this);
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    onScrollStart(){
        Animated.timing(                  
            this.animatedOpacity,            
            {
              toValue: 0.9,                   
              duration: 100,              
            }
         ).start();

    }

    onScrollEnd(){
        setTimeout(() => {    

            Animated.timing(                  
                this.animatedOpacity,            
                {
                  toValue: 0,                   
                  duration: 1000,              
                }
             ).start();   

        }, 3000) 
    }

    toggleModal(){
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    componentDidMount(){
        Firebase.get('/books/1/section/1/page/1/', page => {
            this.setState({ contentText:  page.content })
            this.setState({ pageTitle:  page.title })
        })
    }   

    render(){

        const animatedStyle = {opacity: this.animatedOpacity}

        return (
            <View style={styles.container}>

                <ScrollView
                    onScrollBeginDrag={() => this.onScrollStart()}
                    onScrollEndDrag={() => this.onScrollEnd()}
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%', paddingHorizontal: 20 }}
                >

                    <Button title="Change Redux" onPress={ () => this.props.editEmail('Alterado') } />

                    <TextTitle>{this.state.pageTitle} - {this.props.auth.email} </TextTitle>
                    <LerelContent> { this.state.contentText } </LerelContent>

                </ScrollView>

                <TouchableOpacity style={[styles.viewBottomTouch]} onPress={this.toggleModal} >
                    <Animated.View style={[styles.viewBottom, animatedStyle]}>
                        <Image source={helperButton} style={styles.helperButton} />
                    </Animated.View>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <View style={{ backgroundColor: '#fff' }}>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <TextBase>Hide Modal</TextBase>
                        </TouchableOpacity>
                    </View>

                </Modal>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,    
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.WHITE,
    },

    viewBottomTouch: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    viewBottom: {
        width: 70,
        height: 70,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FEFEFF',
        borderTopLeftRadius: 30,
    },

    helperButton: {
        width: 30,
        height: 30,
        opacity: .7,
    }
})

const mapStateToProp = (state) => state

export default connect(mapStateToProp, {editEmail})(Read)