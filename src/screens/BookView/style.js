import { StyleSheet, Dimensions } from "react-native";
import HomeDefault from "../../Styles/Themes/HomeDefault";
import Colors from "../../Styles/Colors";


// INDICE COLOR

// - HEADER_COLOR
// - WHITE
// - TEXT_TITLE
// - TEXT_DETAIL
// - TEXT_DRAWER

const headerHeight = 250;
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
        height: headerHeight,
        backgroundColor: '#444'
    },
    
    headerContainerOpacity: {
        width: '100%',
        height: '100%',
        backgroundColor: '#22222244',
    },

    headerContainerTop: {
        width: '100%',
        height: 70,
        // backgroundColor: '#eeeeee22',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    arrowBack: {
        width: 17,
        height: 17,
    },

    arrowFavorite: {
        width: 20,
        height: 20,
    },

    bookContent: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height - (headerHeight - 50),
        backgroundColor: HomeDefault.color.WHITE,
        position: 'absolute',
        top: headerHeight - 50,
        borderTopLeftRadius: 50,
        paddingTop: 30,
        paddingHorizontal: 40,

        ...shadowBox,
    },

    bookContentInfo: {
        width: '100%',
        height: 30,
        marginTop: 10,
        // backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    bookContentInfoAuthor: {
        fontSize: 15,
        color: HomeDefault.color.TEXT_DETAIL
    },

    bookContentStats: {
        flexDirection: 'row'
    },

    bookContentStatsItem: {
        flexDirection: 'row',
        marginRight: 15
    },

    bookContentStatsItemIconView: {
        width: 17,
        height: 17,
        marginRight: 5
    },

    bookContentStatsItemIconLike: {
        width: 15,
        height: 15,
        marginRight: 5
    },

    bookContentStatsItemText: {
        fontSize: 12,
        color: HomeDefault.color.TEXT_DETAIL
    },

    sinopse: {
        width: '100%',
        marginTop: 40,
    },

    sinopseTitle: {
        color: Colors.PRIMARY,
        marginBottom: 20
    }

})

export default styles;