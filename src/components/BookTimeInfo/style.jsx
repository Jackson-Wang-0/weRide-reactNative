import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    car: {
        marginLeft: width * 0.1
    }, 
    arriveTime: {
        marginTop: 10,
        marginLeft: 10, 
        fontSize: 17, 
        fontWeight:"700"
    },
    time: {
        marginTop: 12,
        marginLeft: 10, 
        fontSize: 15, 
        fontWeight:"700",
        color: 'gray'
    },
    cost: {
        marginTop: 10,
        marginLeft: 10, 
        fontSize: 17, 
    }
});
export default styles;
