import { Dimensions, StyleSheet } from "react-native";


export default function createStyle() {
  const styles = StyleSheet.create({
  
    opacity: {
      opacity: 0.5
    },
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      alignItems: 'center',
      justifyContent: 'center',
      //marginTop: Constants.statusBarHeight,
    },
    /*
    image: {
      width:'100%', 
      height:'100%', 
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },*/
    image: {
      width:'100%', 
      height:'100%', 
      flex: 1,
      resizeMode: 'cover'
    },
    /*card: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      color: 'white',
      width: Dimensions.get('window').width*.95,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 5,
  
    }*/
    card: {
      backgroundColor: '#0A0A0A',
      color: 'white',
      opacity: .5,
      borderWidth: 1,
      marginVertical:1,
      borderRadius: 5,
    },
    /*container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight,
      color: 'white'
    },*/
    image: {
      width:'100%', 
      height:'100%', 
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
    /*  container: {
        flex: 2,
        flexDirection: 'column',
        width: Dimensions.get('window').width*.95,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        
        //display: "flex",
        justifyContent: "space-around",
        height: "100%",
        textAlign: "center",
        paddingVertical: 5,
      },*/
      title: {
        fontSize: '4vw',
        allowFontScaling: true,
      },
      logo: {
        resizeMode: 'stretch',
        width: 300,
        height: 200,
      },  /*container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.colors.primaryContainer,
        //marginTop: Constants.statusBarHeight,
      },*/
      
    
  });
  return styles;
}
