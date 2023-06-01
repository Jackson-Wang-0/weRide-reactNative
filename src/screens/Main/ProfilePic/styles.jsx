import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from '../../../constants/constants';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  userPictureContainer: {
    alignItems: 'center',
    marginTop: scale(100),
  },
  userPicture: {
    width: scale(280), 
    height: scale(270), 
  },
  btn: {
    width: scale(320), 
    marginTop: scale(20),
  }

});

export default styles;
