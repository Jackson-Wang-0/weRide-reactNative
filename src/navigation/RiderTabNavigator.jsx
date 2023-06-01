import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';
import Home from '../screens/Main/Home';
import Login from '../screens/Auth/Login';
import Profile from '../screens/Main/Profile';
import ProfileChange from '../screens/Main/ProfileChange';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Activity from '../screens/Main/Activity';
import TripDetails from '../screens/Main/TripDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../constants/ScreenName';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ActivityList" component={Activity} />
      <Stack.Screen name="TripDetails" component={TripDetails} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profiles" component={Profile} />
      <Stack.Screen name="ProfileChange" component={ProfileChange} />
    </Stack.Navigator>
  );
};
const RiderTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case ScreenName.HOME:
              return <Octicons name="home" size={size} color={color} />;
            case ScreenName.ACTIVITY:
              return (
                <Ionicons name="ios-list-outline" size={size} color={color} />
              );
            case ScreenName.Profile:
              return (
                <Ionicons name="ios-person-outline" size={size} color={color} />
              );
          }
        },
        tabBarInactiveTintColor: Colors.TAB_INACTIVE,
        tabBarActiveTintColor: Colors.TAB_ACTIVE,
        headerShown: false,
      })}>
      <Tab.Screen name={ScreenName.HOME} component={Home} />
      <Tab.Screen name={ScreenName.ACTIVITY} component={ActivityNavigator} />
      <Tab.Screen name={ScreenName.Profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default RiderTabNavigator;
