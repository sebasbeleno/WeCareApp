import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {Buttons, Colors, Typography, Sizing} from '../../styles';
import {WelcomeScreenProps} from '../../navigation/AuthNavigator';
import {AppRoutes} from '../../navigation/AppRoutes';

export const WelcomeScreen = (props: WelcomeScreenProps) => {
  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoutes.SIGN_IN);
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.CTAContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.HeaderOne}>Hey, es un gusto verte por aquí</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.button} onPress={navigateSignIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  HeaderOne: {
    ...Typography.bold.x60,
    color: Colors.primary.brand,
  },
  container: {
    backgroundColor: Colors.secondary.brand,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    ...Buttons.circular.primary,
    width: Sizing.layout.x120,
    height: Sizing.layout.x50,
  },
  CTAContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textContainer: {
    marginVertical: 40,
  },
  buttonText: {
    ...Typography.bold.x30,
    color: Colors.acent.s600,
  },
});
