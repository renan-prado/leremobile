import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
    },

    topArea: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        // backgroundColor: '#eee'
    },

    subtitle: {
        color: Colors.BLUE_DARK_BRIGHTNESS,
    },

    seeMore: {
        marginBottom: 5,
        marginRight: 20,
        fontSize: 13,
        color: Colors.GREY
    },

    bookItem: {
        width: '100%',
        height: 250,
        backgroundColor: '#eee',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10
    }

})

export default styles;