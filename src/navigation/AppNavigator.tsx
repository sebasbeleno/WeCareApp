import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from './AppRoutes';

import {AuthNavigator} from './AuthNavigator';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  Auth: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
  // eslint-disable-next-line prettier/prettier
  props: Partial<StackNavigatorProps>
): React.ReactElement => (
  <Stack.Navigator {...props}>
    <Stack.Screen name={AppRoutes.AUTH} component={AuthNavigator} />
  </Stack.Navigator>
);
