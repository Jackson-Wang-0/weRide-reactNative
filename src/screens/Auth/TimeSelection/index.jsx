import React from 'react';
import {Text, View, SafeAreaView, ImageBackground,TouchableOpacity} from 'react-native';
import styles from './style';
import LongBottom from '../../../components/LongButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import SwitchSelector from "react-native-switch-selector";
import {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const TimeSelection = () => {
  const gray_rec = require('../../../assets/images/time_selection/grayrec.png');
  const options = [
    { label: "AM", value: "1" },
    { label: "PM", value: "2" },
  ];
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedAMPM, setSelectedAMPM] = useState("1"); // Default value "AM" with value "1"

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: 'blue' };
  }

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    setSelectedTime(date);
    hideTimePicker();
  };

  const handleSubmit = () => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", `${selectedTime.getHours()}:${selectedTime.getMinutes().toString().padStart(2, '0')}`);
    console.log("AM/PM:", selectedAMPM);

    // TODO send the data to an API.
  };

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
                onDayPress={handleDayPress}
                markedDates={markedDates} // Set the markedDates prop to apply styling to selected dates
            />
            
            <View style={{flexDirection:"row", marginTop: 10}}>

                <View style={{flex:1}}>
                    <Text style={{fontSize: 20, fontWeight:"500"}}>Time</Text>
                </View>

                <TouchableOpacity onPress={showTimePicker}>
                    <ImageBackground 
                    source={gray_rec} 
                    style={{flex: 1, marginRight:10 ,height: 30, width: 65}}
                    imageStyle={{ borderRadius: 6}}>
                        <Text style={{fontSize: 21, fontWeight:"500", textAlign: "center"}}>
                        {selectedTime
                            ? `${selectedTime.getHours()}:${selectedTime.getMinutes().toString().padStart(2, '0')}`
                            : `00:00`}
                        </Text>
                    </ImageBackground>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                        locale="en_GB"
                    />
                </TouchableOpacity>


                <SwitchSelector
                    style={{ flex: 1 }}
                    borderRadius={10}
                    textColor={'#000000'}
                    selectedColor={'#e5e5e6'}
                    buttonColor={'#708090'}
                    height={30}
                    options={options}
                    initial={selectedAMPM === "1" ? 0 : 1} // Initialize with the selectedAMPM state
                    onPress={(value) => {
                        setSelectedAMPM(value); // Update the selectedAMPM state when the user switches between AM and PM
                    }}
                />
            </View>
        </View>

        <LongBottom otherStyle={styles.btn} text={'Submit'} onPress={handleSubmit} />
        
        </View>
        
    </SafeAreaView>
  );
};

export default TimeSelection;
