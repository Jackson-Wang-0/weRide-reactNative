import React from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import styles from './style';
import LongBottom from '../../../components/LongButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import SwitchSelector from "react-native-switch-selector";
import {useState} from 'react';
import {Calendar, CalendarList, Agend} from 'react-native-calendars';


const TimeSelection = () => {
  const gray_rec = require('../../../assets/images/time_selection/grayrec.png');
  const options = [
    { label: "AM", value: "1" },
    { label: "PM", value: "2" },
  ];
  
  
  var hours = new Date().getHours(); //Current Hours
  if (hours > 12) {
    hours = hours - 12
  }
  console.log(hours)
  var min = new Date().getMinutes(); //Current Minutes
  
    
  return (
    <SafeAreaView>
        <View style={styles.root}>
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <Ionicons
                        name={'arrow-back'}
                        size={30}
                        onPress={() => navigation.navigate()}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.headText}>Leaving Time</Text>
                </View>
            </View>
        
        
        <View style={styles.calendar}>
            
            <Calendar
                style={{left: width * -0.015}}
                onDayPress={day => {
                console.log('selected day', day);
                }}
            />
            
            <View style={{flexDirection:"row", marginTop: 10}}>

                <View style={{flex:1}}>
                    <Text style={{fontSize: 20, fontWeight:"500"}}>Time</Text>
                </View>

                <ImageBackground 
                source={gray_rec} 
                style={{flex: 1, left: width * 0.1, height: 30, width: 60}}
                imageStyle={{ borderRadius: 6}}>
                    <Text style={{fontSize: 21, fontWeight:"500", left: 7}}>
                        {min < 10 ? [hours, ":", 0, min] : [hours, ":", min]}
                    </Text>
                </ImageBackground>

                <SwitchSelector
                style={{flex: 1}}
                borderRadius={10}
                textColor={'#000000'}
                selectedColor={'#e5e5e6'}
                buttonColor={'#708090'}
                height= {30}
                options={options}
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                />
            </View>
        </View>

        <LongBottom otherStyle={styles.btn} text={'Submit'} onPress={() => {}} />
        
        </View>
        
    </SafeAreaView>
  );
};

export default TimeSelection;
