import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";


export default function createStyle() {
  const theme = useTheme();
  const styles = StyleSheet.create({
  
    opacity: {
      opacity: 0.5
    },
    container: {
      flex: 1,
      //alignItems: 'center',
      //padding: '5px',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: theme.colors.background,
    },
    card: {
      //backgroundColor: theme.colors.background,
      color: theme.colors.primary,
      //opacity: .5,
      borderWidth: 1,
      marginVertical:1,
      borderRadius: 5,
    },
    image: {
      width:'100%', 
      height:'100%', 
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '4vw',
      allowFontScaling: true,
      //height:"5%"
      //borderRadius: '5px',
      //padding: "50px"
    },
    topbarTitle: {
      fontSize: '4vw',
      allowFontScaling: true,
    },
    logo: {
      resizeMode: 'stretch',
      width: 300,
      height: 200,
      objectFit: 'contain',
    },
    appbar: {
      backgroundColor: theme.colors.secondaryContainer,
      color: theme.colors.secondary
    }
  });
  return styles;
}
