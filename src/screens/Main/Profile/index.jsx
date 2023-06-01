import React, {useEffect, useReducer, useState} from 'react';
import {TouchableOpacity, SafeAreaView, Text, View,  Image, Switch } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Colors} from '../../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {dummyActivityData} from '../../../constants/data/dummyActivityData';
import {useNavigation} from '@react-navigation/core';


const Profile = () => {
    const tabBarHeight = useBottomTabBarHeight();
    const navigation = useNavigation();
    const [isEnabled,setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{...styles.root, marginBottom: tabBarHeight + 50}}>
                <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
                <Ionicons
                    name="ios-chatbubble-ellipses-outline"
                    color={'#B6B6B6'}
                    size={scale(25)}
                    marginTop={scale(-20)}
                />
                </View>
            </View>

            <View style={styles.userBlock}>
                {/* User Picture */}
                <View style={styles.userPictureContainer}>
                    <Image
                        source={{ uri: dummyActivityData[0].activities[0].imageUrl }}
                        style={styles.userPicture}
                    />
                </View>

                {/* User Name */}
                <Text style={styles.userName}> {dummyActivityData[0].activities[0].name} </Text>

                {/* Pencil Icon */}
                <TouchableOpacity onPress={() => navigation.navigate('ProfileChange')}>
                    <MaterialCommunityIcons
                        name="pencil-outline"
                        color={Colors.PRIMARY_COLOR}
                        size={scale(25)}
                        marginLeft={scale(10)}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.iconsBlock}>
                {/* View profile icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Ionicons 
                            name="ios-person-outline" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> View Profile </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(144) }}
                            size = {scale(15)}
                    />
                </View>
                {/* Ride history icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Octicons 
                            name="history" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Ride History </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(142) }}
                            size = {scale(15)}
                    />
                </View>
                {/* Notifications icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Octicons 
                            name="bell" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Notification </Text>
                    <Switch
                        trackColor = {{false: 'grey', true: '#23C552'}}
                        thumbStyle={{ width: scale(20), height: scale(20) }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ marginLeft: scale(110) }}
                    />
                </View>
                {/* Payment icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Octicons 
                            name="credit-card" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Payment </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(159) }}
                            size = {scale(15)}
                    />
                </View>
                {/* Reward icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Feather
                            name="award" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Reward </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(168) }}
                            size = {scale(15)}
                    />
                </View>
                {/* Message icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Ionicons 
                            name="ios-chatbubble-ellipses-outline" 
                            color={Colors.DARK_BLUE}
                            size={scale(15)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Message </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(159) }}
                            size = {scale(15)}
                    />
                </View>
                {/* Help icon and text */}
                <View style={styles.profileFunction}>
                    <View style={styles.IconContainer}>
                        <Ionicons 
                            name="help-circle-outline" 
                            color={Colors.DARK_BLUE}
                            size={scale(20)}
                        />
                    </View>
                    <Text style={{ paddingLeft: scale(10) }}> Help </Text>
                    <MaterialIcons 
                            name="arrow-forward-ios" 
                            color= 'gray'
                            style={{ paddingLeft: scale(187) }}
                            size = {scale(15)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );

};

export default Profile;