import React, {useEffect, useReducer, useState} from 'react';
import {SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {dummyActivityData} from '../../../constants/data/dummyActivityData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LongBottom from '../../../components/LongButton';
import FormInput from '../../../components/FormInput';
import {Colors} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/core';


const ProfileChange = () => {
    const tabBarHeight = useBottomTabBarHeight();
    const navigation = useNavigation();
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const validate = () => {
        if (firstName !== '' && lastName !== '') {
          setBtnDisabled(false);
          return;
        }
        setBtnDisabled(true);
    };

    useEffect(() => {
        validate();
    }, [firstName, lastName]);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{...styles.root, marginBottom: tabBarHeight + 50}}>
                <View style={styles.header}>
                {/* User Picture */}
                <View style={styles.userPictureContainer}>
                    <Image
                        source={{ uri: dummyActivityData[0].activities[0].imageUrl }}
                        style={styles.userPicture}
                    />
                </View>
                <Ionicons
                    name="ios-chatbubble-ellipses-outline"
                    color={'#B6B6B6'}
                    size={scale(25)}
                    marginTop={scale(-80)}
                />
                </View>
                <View style={styles.IconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePic')}>
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            color={'white'}
                            size={scale(15)}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.InputContainer}>
                <FormInput
                    tag={'First Name'}
                    onChangeText={setFirstName}
                    value={firstName}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onBlur={validate}
                    placeholder={'Enter your First name'}
                />
                <FormInput
                    tag={'Last Name'}
                    onChangeText={setLastName}
                    value={lastName}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onBlur={validate}
                    placeholder={'Enter your last name'}
                />

                <LongBottom
                    onPress={() => {
                        navigation.navigate('Profiles');
                    }} 
                    disabled={btnDisabled}
                    text={'Save'}
                    otherStyle={styles.btn}
                />
            </View>
        </SafeAreaView>
    );

};

export default ProfileChange;
