import { StyleSheet, Dimensions } from "react-native";
import HomeDefault from "../../Styles/Themes/HomeDefault";


// INDICE COLOR

// - HEADER_COLOR
// - WHITE
// - TEXT_TITLE
// - TEXT_DETAIL
// - TEXT_DRAWER

const headerHeight = 200;
const shadowBox = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,    
        flexDirection: 'column',
    },

    header: {
        width: Dimensions.get('window').width,
        height: headerHeight,
        backgroundColor: HomeDefault.color.HEADER_COLOR
    },

    headerBlockTransparent: {
        backgroundColor: HomeDefault.color.HEADER_COLOR + 'f3',
        width: '100%',
        height: '100%',
    },

    headerArea: {
        width: '100%',
        height: headerHeight - 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerItems: {
        width: '90%',
        height: 60,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerMenu: {
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerMenuIcon : {
        width: 23,
        height: 23,
    },

    headerSearch: {
        backgroundColor: HomeDefault.color.WHITE,
        flex: 1,
        height: 40,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        ...shadowBox,
    },

    homeContent: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height - (headerHeight - 50),
        backgroundColor: HomeDefault.color.WHITE,
        position: 'absolute',
        top: headerHeight - 50,
        borderTopLeftRadius: 50,
        paddingTop: 30,
        paddingLeft: 40,

        ...shadowBox,
    },



})

export default styles;