import { StyleSheet, StatusBar, Dimensions } from "react-native";
import Colors from "../../Styles/Colors";

// INDICE COLOR

// - HEADER_COLOR
// - WHITE
// - TEXT_TITLE
// - TEXT_DETAIL
// - TEXT_DRAWER

const headerHeight = 90;
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
        width: '100%',
        height: headerHeight
    },

    containerOpacity: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.PRIMARY + 'dd'
    },

    containerHeader: {
        marginTop: StatusBar.currentHeight,
        height: headerHeight - StatusBar.currentHeight,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },

    containerHeaderImage: {
        width: 17,
        height: 17,
    },

    containerHeaderText: {
        color: Colors.WHITE,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    talkArea: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20
    },

    talkAreaScroll: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    personTalk: {
        width: '100%',
        flexDirection: 'row',

    },

    personIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.GREY_DARK,
        borderRadius: 50,
        margin: 10
    },

    personTextContainer: {
        maxWidth: Dimensions.get('window').width - 100,
    },

    personText: {
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        color: Colors.WHITE,
        fontSize: 17,
        marginTop: 15,
    },

    userTalk: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },

    userTextContainer: {
        maxWidth: Dimensions.get('window').width - 100,
    },

    userText: {
        backgroundColor: Colors.SECUNDARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderTopRightRadius: 0,
        color: Colors.WHITE,
        fontSize: 17,
        textAlign: 'right',
        marginTop: 10,
    },

    bottom: {
        width: '100%',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        flexDirection: 'row',
        ...shadowBox
    },

    userInput: {
        width: Dimensions.get('window').width - 80,
        height: '100%',
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: Colors.WHITE,
    },
    
    bottomButton: {
        width: 80,
        height: '100%',
        borderRadius: 0,
        backgroundColor: Colors.WHITE,
        color: Colors.PRIMARY,
    }

})

export default styles;