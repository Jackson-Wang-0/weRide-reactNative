import React from 'react';
import {Text, View, Image, SafeAreaView, TextInput} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
const locURL = require('../../../assets/images/search/loc.png');
const graylocURL = require('../../../assets/images/search/grayloc.png');
const lineURL = require('../../../assets/images/search/line.png');
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Search = () => {
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
                    <Text style={styles.headText}>Your Route</Text>
                </View>
            </View>

            <View style={[{flexDirection:"row"}, {marginBottom: 40}]}>
                <View style={{flex:1}}>
                    <Image style={styles.loc} source={locURL}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Search Parking Lot"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Sixth College Parking Structure</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

            <Image style={{left: width * -0.07}}source={lineURL}/>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Peterson Loop</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

            <Image style={{left: width * -0.07}}source={lineURL}/>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Hopkins Parking Lot</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

            <Image style={{left: width * -0.07}}source={lineURL}/>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Gilman Parking Structure</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

            <Image style={{left: width * -0.07}}source={lineURL}/>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Lot 301</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

            <Image style={{left: width * -0.07}}source={lineURL}/>

            <View style={styles.locations}>
                <View style={{flex:1}}>
                    <Image style={styles.grayloc} source={graylocURL}/>
                </View>
                <View style={[{flex:3, left: width * -0.17}]}>
                    <Text>Lot 306</Text>
                    <Text style={{color: '#808080'}}>UCSD</Text>
                </View>
            </View>

        </View>
    </SafeAreaView>
  );
};

export default Search;
