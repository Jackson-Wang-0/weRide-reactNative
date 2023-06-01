import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
    root: {
      padding: scale(20),
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontWeight: '700',
      fontSize: scale(30),
      marginTop: scale(30),
    },
    userBlock: {
      height: scale(85),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: scale(25),
      marginTop: scale(-130),
      marginLeft: scale(20), 
      marginRight: scale(20), 
      display: 'flex',
      flexDirection: 'row',
    },
    iconsBlock: {
      backgroundColor: 'white',
      borderRadius: scale(25),
      marginLeft: scale(20), 
      marginRight: scale(20), 
      marginTop: scale(20),
      height: scale(420),
    },
    userPictureContainer: {
      borderWidth: scale(3),
      borderColor: Colors.MEDIUM_PURPLE,
      borderRadius: scale(60),
    },
    userPicture: {
      width: scale(45), 
      height: scale(45), 
      borderRadius: scale(25), 
    },
    userName: {
      fontWeight: 'bold',
      color: Colors.PRIMARY_COLOR,
      marginRight: scale(110), 
      marginLeft: scale(10), 
    },
    IconContainer: {
      width: scale(35),
      height: scale(35),
      borderRadius: scale(30),
      backgroundColor: Colors.LIGHT_PURPLE, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileFunction: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: scale(20),
      paddingLeft: scale(15),
    },
   

  });
  
  export default styles;
  