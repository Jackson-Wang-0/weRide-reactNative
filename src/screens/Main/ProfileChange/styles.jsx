import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from '../../../constants/constants';
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
    marginBottom: scale(10),
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
  },
  userPictureContainer: {
    alignItems: 'center',
    borderColor: Colors.MEDIUM_PURPLE,
    borderWidth: scale(3),
    borderRadius: scale(50), 
    marginLeft: scale(105),
    marginTop: scale(50),
  },
  userPicture: {
    width: scale(100), 
    height: scale(100), 
    borderRadius: scale(50), 
  },
  IconContainer: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(30),
    backgroundColor: Colors.PRIMARY_COLOR, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: scale(2),
    borderRadius: scale(50), 
    marginLeft: scale(178),
    marginTop: scale(-37)
  },
  InputContainer: {
    paddingLeft: scale(45),
    marginTop: scale(-110),
  },
  btn: {
    marginLeft: scale(-20),
  }

});

export default styles;
