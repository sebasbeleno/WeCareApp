import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {AppNavigatorParams} from './AppNavigator';
import {WelcomeScreen, SingInScreen} from '../screens/Auth';
import {AppRoutes} from './AppRoutes';

/**
 * Define our screens on auth
 * navigation
 */
type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoutes.SIGN_IN]: undefined;
  [AppRoutes.SIGN_UP]: undefined;
  [AppRoutes.WELCOME]: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoutes.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoutes.SIGN_IN>;
}

export interface WelcomeScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoutes.WELCOME>;
  route: RouteProp<AuthNavigatorParams, AppRoutes.WELCOME>;
}

const AuthStack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name={AppRoutes.WELCOME} component={WelcomeScreen} />
    <AuthStack.Screen name={AppRoutes.SIGN_IN} component={SingInScreen} />
  </AuthStack.Navigator>
);
