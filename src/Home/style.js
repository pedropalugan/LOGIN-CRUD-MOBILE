import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      textAlign: 'center',
    },
    title:{
      fontSize: 40,
      color: "#fff",
      marginTop: '10%',
    },
    btn:{
      backgroundColor: "cyan",
      height: 50,
      marginTop: 15,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 5,
      marginLeft: "15%",
      marginRight: "15%",

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
        flexDirection: "column",
        marginTop: '20%',
        justifyContent: 'space-between',
        marginBottom: '20%',
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
    txtMsg:{
        color: "red",
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10
    },
    txt:{
      color: '#FFF',
      fontSize: 18,
      fontWeight: 500,
    },
    btnBack:{
      backgroundColor: "cyan",
      height: 50,
      marginTop: 75,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 5,
      marginLeft: "15%",
      marginRight: "15%",
    },
});

export default styles;