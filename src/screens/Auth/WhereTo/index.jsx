import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './style';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const searchIcon = require('../../../assets/images/where_to/search.png');
const graylocURL = require('../../../assets/images/where_to/grayloc.png');
const lineURL = require('../../../assets/images/where_to/line.png');
import Ionicons from 'react-native-vector-icons/Ionicons';

// animatedValue = new Animated.Value(100) 

const WhereTo = () => {
  
  return (
  
      <View style={styles.root}>

        
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 32.88032824104535,
              longitude: -117.23636743386733,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          
          >
          </MapView>
        </View>

        <View style={{flexDirection:"row", 
                      top:height * 0.08, 
                      left: width * 0.05}}>
          <View style={{flex:1}}>
              <Ionicons
                  name={'arrow-back'}
                  size={30}
                  onPress={() => navigation.navigate()}
              />
          </View>
          <View style={{flex:1}}>
              <Text style={styles.headText}>Pick Destination</Text>
          </View>
        </View>
       
        <View style={styles.panel}>
          <SlidingUpPanel 
          ref={c => this._panel = c}
          draggableRange={{top: height * -0.5, bottom: height * -0.8}}
          backdropOpacity={0}
          // animatedValue={animatedValue}
          top={height * 0.4}
          >
            <View style={styles.container}>
              <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                  <Image style={styles.search}source={searchIcon}/>
                </View>
                <View style={{flex:1}}>
                  <TextInput
                      style={styles.inputBox}
                      placeholder="Where to?"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#000000"
                  />
                </View>
              </View>

              <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Hopkins Parking Lot</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
              </View>
              
             
              <Image style={{marginTop: -120}}source={lineURL}/>
              

              <View style={styles.locations}>
                  <View style={{flex:1}}>
                      <Image style={styles.grayloc} source={graylocURL}/>
                  </View>
                  <View style={[{flex:3, left: width * -0.17}]}>
                      <Text>Gilman Parking Structure</Text>
                      <Text style={{color: '#808080'}}>UCSD</Text>
                  </View>
              </View> 
            </View>

          </SlidingUpPanel>
        
        </View>

      
      </View>
  
  
  );
};

export default WhereTo;
