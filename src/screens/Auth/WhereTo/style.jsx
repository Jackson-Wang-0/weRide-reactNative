import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    root: {
      // ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
    },
    headText: {
      fontSize: 22,
      left: width * -0.32
    },
    mapView: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      //...StyleSheet.absoluteFillObject,
      height: height,
      width: width,
    },
    container: {
      height: height * 0.5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25
    },
    panel: {
      width: width,
      height: height * 0.05
    },
    inputBox: {
      bottom: height * 0.21,
      height: 60, 
      width: width * 0.9, 
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 30,  
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      left: width * -0.45
    },
   search: {
    bottom: height * 0.19,
    left: width * 0.1
   },
   locations: {
    top: height * -0.065,
    flexDirection:"row",
    left: width * 0.1,
  },
  grayloc: {
    left: width * -0.01,
    top: 5
  }
});

export default styles;