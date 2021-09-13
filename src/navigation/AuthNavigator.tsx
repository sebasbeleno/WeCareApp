import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthScreen} from '../screens/Auth';
import {AppRoutes} from './AppRoutes';
import {AppNavigatorParams} from './AppNavigator';

/**
 * Define our screens on auth
 * navigation
 */
type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoutes.SIGN_IN]: undefined;
  [AppRoutes.SIGN_UP]: undefined;
  [AppRoutes.RESET_PASSWORD]: undefined;
};

const AuthStack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name={AppRoutes.SIGN_IN} component={AuthScreen} />
  </AuthStack.Navigator>
);
