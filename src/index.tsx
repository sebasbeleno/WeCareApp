/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './theme/theme.json';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigation/AppNavigator';
import {AppRoutes} from './navigation/AppRoutes';

const App: React.FC = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <NavigationContainer>
        <AppNavigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={AppRoutes.AUTH}
        />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
