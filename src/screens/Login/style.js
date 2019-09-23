import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Styles/Colors";

// INDICE COLOR

// - HEADER_COLOR
// - WHITE
// - TEXT_TITLE
// - TEXT_DETAIL
// - TEXT_DRAWER

const headerHeight = 300;
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

    headerLogo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    headerLogoImage: {
        width: 120,
        height: 120
    },

    headerTitle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitleText: {
        fontSize: 36,
        color: Colors.WHITE,
        fontWeight: 'bold',
        letterSpacing: 1
    },

    content: {
        paddingTop: 50,
        paddingHorizontal: 20
    },

    contentInput: {
        borderBottomColor: Colors.GREY,
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 20
    },

    contentInputIcon: {
        width: 18,
        height: 18,
        position: 'absolute',
        right: 10,
        top: 15
    },

    buttonLogin: {
        marginTop: 50
    },

    createButton: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    createButtonText: {
        textAlign: 'right',
        padding: 20
    }

})

export default styles;