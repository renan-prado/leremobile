import { StyleSheet } from "react-native";
import HomeDefault from "../../Styles/Themes/HomeDefault";

// INDICE COLOR

// - HEADER_COLOR
// - WHITE
// - TEXT_TITLE
// - TEXT_DETAIL
// - TEXT_DRAWER

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#000'
    },

    headerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: HomeDefault.color.HEADER_COLOR + 'f3',
    },

    headerPhoto: {
        flex: 3,
        justifyContent: 'center'
    },

    headerPhotoImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 20
    },

    headerName: {
        flex: 1
    }

})

export default styles;