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
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    headerLogoContainer: {
        width: 140,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 100,
        ...shadowBox
    },

    headerLogoImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100
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

    headerInfo: {
        width: '80%',
        height: 150,
        position: 'absolute',
        top: 25,
        backgroundColor: Colors.WHITE,
        borderRadius: 20,
        ...shadowBox
    },

    headerInfoName: {
        textAlign: 'center',
        fontSize: 25,
        paddingVertical: 20,
        color: Colors.SECUNDARY
    },

    headerInfoStats: {
        flex: 1,
        flexDirection: 'row'
    },

    headerInfoStatsItem: {
        flex: 1,
        alignItems: 'center'
    },

    headerInfoStatsNumber: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    headerInfoStatsLabel: {
        color: Colors.GREY_DARK
    },

    perfilContent: {
        paddingTop: 130,
        paddingHorizontal: 20
    },

    textItem: {
        fontSize: 20,
        marginBottom: 15
    },

    bottom: {
        width: 120,
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: (Dimensions.get('window').width / 2) - 60
    }


})

export default styles;