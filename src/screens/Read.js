import React, { Component, useState } from 'react'
import { 
    StyleSheet,
    View,
    Animated,
    Image,
    ScrollView
} from "react-native";

import Colors from "../styles/Colors";

import helperButton from "../../assets/images/read_chat_black.png";

import { TextBase } from "../styles/Presets";


import { LerelContent } from "../methods/readArea/readAreaMethods";

class Read extends Component {

    
    constructor(props){
        super(props)

        this.state = {
            helperButton: 1
        }

        this.animatedOpacity = new Animated.Value(0)
        this.backgroundColor = new Animated.Value()

        this.onScrollStart = this.onScrollStart.bind(this);
        this.onScrollEnd = this.onScrollEnd.bind(this);
    }

    onScrollStart(){
        // this.setState({ helperButton: 0.9 })

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


    render(){

        const animatedStyle = {opacity: this.animatedOpacity}


        return (
            <View style={styles.container}>

                <ScrollView
                    onScrollBeginDrag={() => this.onScrollStart()}
                    onScrollEndDrag={() => this.onScrollEnd()}
                    style={{ width: '100%', paddingHorizontal: 20 }}
                >
                    
                    <TextBase>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar efficitur tellus. Duis augue velit, tempus vel eros non, faucibus luctus ligula. Proin dapibus risus quam, non posuere ligula feugiat vitae. Duis dignissim vulputate lacus, ut hendrerit lectus gravida in. Suspendisse sed ultricies sem, sed vehicula urna. Donec aliquet cursus risus, id venenatis justo facilisis et. Nulla semper dictum quam, eu facilisis dui. Nullam elementum placerat aliquet. Duis lorem urna, finibus sit amet justo a, pretium hendrerit mi. Etiam sagittis augue a risus ornare, mattis gravida enim malesuada. Vestibulum aliquet condimentum tristique. Nulla molestie justo vitae nisi dictum congue. Nam accumsan scelerisque suscipit. Quisque sit amet nunc dolor. Nulla ut augue justo
                    </TextBase>

                    <TextBase>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar efficitur tellus. Duis augue velit, tempus vel eros non, faucibus luctus ligula. Proin dapibus risus quam, non posuere ligula feugiat vitae. Duis dignissim vulputate lacus, ut hendrerit lectus gravida in. Suspendisse sed ultricies sem, sed vehicula urna. Donec aliquet cursus risus, id venenatis justo facilisis et. Nulla semper dictum quam, eu facilisis dui. Nullam elementum placerat aliquet. Duis lorem urna, finibus sit amet justo a, pretium hendrerit mi. Etiam sagittis augue a risus ornare, mattis gravida enim malesuada. Vestibulum aliquet condimentum tristique. Nulla molestie justo vitae nisi dictum congue. Nam accumsan scelerisque suscipit. Quisque sit amet nunc dolor. Nulla ut augue justo
                    </TextBase>

                    <TextBase>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar efficitur tellus. Duis augue velit, tempus vel eros non, faucibus luctus ligula. Proin dapibus risus quam, non posuere ligula feugiat vitae. Duis dignissim vulputate lacus, ut hendrerit lectus gravida in. Suspendisse sed ultricies sem, sed vehicula urna. Donec aliquet cursus risus, id venenatis justo facilisis et. Nulla semper dictum quam, eu facilisis dui. Nullam elementum placerat aliquet. Duis lorem urna, finibus sit amet justo a, pretium hendrerit mi. Etiam sagittis augue a risus ornare, mattis gravida enim malesuada. Vestibulum aliquet condimentum tristique. Nulla molestie justo vitae nisi dictum congue. Nam accumsan scelerisque suscipit. Quisque sit amet nunc dolor. Nulla ut augue justo
                    </TextBase>

                </ScrollView>

                <Animated.View style={[styles.viewBottom, animatedStyle]} >
                    <Image source={helperButton} style={styles.helperButton} />
                </Animated.View>
        
                
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

    viewBottom: {
        width: 70,
        height: 70,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        backgroundColor: '#FEFEFF',
        borderTopLeftRadius: 30,
    },

    helperButton: {
        width: 30,
        height: 30,
        opacity: .7,
    }
})

export default Read