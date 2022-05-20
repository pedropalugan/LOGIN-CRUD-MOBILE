import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 40,
      color: "#fff"
    },
    btn:{
      backgroundColor: "cyan",
      width: "50%",
      height: 40,
      marginTop: 10,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 10,
      marginBottom: 5
    },
    input:{
      borderColor: "cyan",
      borderWidth: 1,
      borderRadius: 5,
      width: "70%",
      height: 40,
      marginTop: 15,
      color: "white",
      paddingLeft: 4,
      fontSize: 16
    },
    txtBtn:{
      fontSize: 16,
      fontWeight: "400"
    },
    viewConta:{
        display: "flex",
        flexDirection: "row"
    },
    txtConta:{
        color: "#fff",
        fontSize: 15,
        display: "flex"
    },
    txtLink:{
        display: "flex",
        color: "cyan",
        marginLeft: 5,
        textDecorationLine: "underline"
    },

});

export default styles;