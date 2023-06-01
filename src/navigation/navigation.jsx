import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Verification from '../screens/Auth/Verification';
import RoleSelect from '../screens/Auth/RoleSelect';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import VerificationSuccess from '../screens/Auth/VerificationSuccess/index';
import Search from '../screens/Auth/Search/index';
import CreatePassword from '../screens/Auth/CreatePassword';
import OnBoarding from '../screens/Auth/OnBoarding/index';
import GetStarted from '../screens/Auth/GetStarted';
import LocationAndNotification from '../screens/Auth/LocationAndNotification/index';
import LocationAndNotification1 from '../screens/Auth/LocationAndNotification/index1';
import Teleport from '../screens/teleport';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';
import Activity from '../screens/Main/Activity';
import TripDetails from '../screens/Main/TripDetails';
import CardInfo from '../screens/Main/CardInfo';
import CardSelection from '../screens/Main/CardSelection';
import Home from '../screens/Main/Home';
import TimeSelection from '../screens/Auth/TimeSelection/index';
import BookTime from '../screens/Auth/BookTime/index';
import Pending from '../screens/Main/Pending/index';
import Profile from '../screens/Main/Profile/index';
import ProfileChange from '../screens/Main/ProfileChange/index';
import ProfilePic from '../screens/Main/ProfilePic/index';
import RiderTabNavigator from './RiderTabNavigator';
import {ScreenName} from '../constants/ScreenName';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const AuthContext = React.createContext();
const ActivityNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.ACTIVITY_LIST} component={Activity} />
      <Stack.Screen name={ScreenName.TRIP_DETAILS} component={TripDetails} />
      <Stack.Screen name={ScreenName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  let authContext = null;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Teleport" component={Teleport} />
          <Stack.Screen name={ScreenName.SIGN_UP} component={Signup} />
          <Stack.Screen name={ScreenName.LOGIN} component={Login} />
          <Stack.Screen
            name={ScreenName.VERIFICATION}
            component={Verification}
          />
          <Stack.Screen
            name={ScreenName.FORGET_PASSWORD}
            component={ForgetPassword}
          />
          <Stack.Screen name={ScreenName.ROLE_SELECT} component={RoleSelect} />
          <Stack.Screen
            name={ScreenName.CREATE_PASSWORD}
            component={CreatePassword}
          />
          <Stack.Screen name={ScreenName.ON_BOARDING} component={OnBoarding} />
          <Stack.Screen name={ScreenName.GET_STARTED} component={GetStarted} />
          <Stack.Screen name={ScreenName.CARD_INFO} component={CardInfo} />
          <Stack.Screen
            name={ScreenName.CARD_SELECTION}
            component={CardSelection}
          />
          <Stack.Screen name={ScreenName.PENDING} component={Pending} />
          <Stack.Screen name={ScreenName.HOME} component={Home} />
          <Stack.Screen name={ScreenName.Profile} component={Profile} />
          <Stack.Screen name={ScreenName.ProfileChange} component={ProfileChange} />
          <Stack.Screen name={ScreenName.ProfilePic} component={ProfilePic} />
          <Stack.Screen
            name={ScreenName.LOCATION_AND_NOTIFICATION1}
            component={LocationAndNotification}
          />
          <Stack.Screen
            name={ScreenName.LOCATION_AND_NOTIFICATION2}
            component={LocationAndNotification1}
          />
          <Stack.Screen
            name={ScreenName.VERIFICATION_SUCCESS}
            component={VerificationSuccess}
          />
          <Stack.Screen name={ScreenName.SEARCH} component={Search} />
          <Stack.Screen
            name={ScreenName.TIME_SELECTION}
            component={TimeSelection}
          />
          <Stack.Screen name={ScreenName.BOOK_TIME} component={BookTime} />
          <Stack.Screen name={ScreenName.MAIN} component={RiderTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
