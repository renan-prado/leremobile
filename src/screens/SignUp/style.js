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
        justifyContent: 'flex-end'
    },

    personTalk: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,

    },

    personIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.GREY_DARK,
        borderRadius: 50,
        margin: 10
    },

    personTextContainer: {
        width: Dimensions.get('window').width - 100,
    },

    personText: {
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        color: Colors.WHITE,
        fontSize: 17,
        marginTop: 13
    },

    userTalk: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        marginBottom: 10,
    },

    userTextContainer: {
        maxWidth: Dimensions.get('window').width - 100,
    },

    userText: {
        backgroundColor: Colors.SECUNDARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderTopRightRadius: 0,
        color: Colors.WHITE,
        fontSize: 17,
        marginTop: 10,
        textAlign: 'right'
    }

})

export default styles;