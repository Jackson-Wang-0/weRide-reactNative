import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ScreenName} from '../constants/ScreenName';

const Teleport = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate(ScreenName.SIGN_UP)}>
        SignUp
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.LOGIN)}>Login</Text>
      <Text onPress={() => navigation.navigate(ScreenName.VERIFICATION)}>
        Verification
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.FORGET_PASSWORD)}>
        ForgetPassword
      </Text>
      <Text
        onPress={() => navigation.navigate(ScreenName.VERIFICATION_SUCCESS)}>
        VerificationSuccess
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.ON_BOARDING)}>
        OnBoarding
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.MAIN)}>main</Text>
      <Text onPress={() => navigation.navigate(ScreenName.CARD_INFO)}>
        CardInfo
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.CARD_SELECTION)}>
        CardSelection
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.HOME)}>Home</Text>
      <Text onPress={() => navigation.navigate(ScreenName.SEARCH)}>Search</Text>
      <Text onPress={() => navigation.navigate(ScreenName.TIME_SELECTION)}>
        TimeSelection
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.BOOK_TIME)}>
        BookTime
      </Text>
      <Text onPress={() => navigation.navigate(ScreenName.PENDING)}>
        Pending
      </Text>

      <Text onPress={() => navigation.navigate(ScreenName.WHERE_TO)}>
        WhereTo
      </Text>
    </SafeAreaView>
  );
};

export default Teleport;
