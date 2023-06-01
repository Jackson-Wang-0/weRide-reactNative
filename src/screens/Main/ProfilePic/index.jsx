import React, {useState} from 'react';
import { SafeAreaView, View, Image} from 'react-native';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import {dummyActivityData} from '../../../constants/data/dummyActivityData';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';

const ProfilePic = () => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userPictureContainer}>
                    <Image
                        source={{ uri: dummyActivityData[0].activities[0].imageUrl }}
                        style={styles.userPicture}
                    />
            </View>
            <LongBottom
                    onPress={() => {
                        navigation.navigate('Profiles');
                    }} 
                    text={'Upload'}
                    otherStyle={styles.btn}
                />
        </SafeAreaView>
    );
};

export default ProfilePic;