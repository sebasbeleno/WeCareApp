import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {Typography, Colors, Buttons} from '../../styles';

export const AuthScreen = () => {
  return (
    <Layout style={styles.container}>
      <View>
        <Text style={styles.HeaderOne}>Hey, es un gusto verte por aquí</Text>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.button}>
            <Text>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text>Crear cuenta</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  HeaderOne: {
    ...Typography.headerOne,
  },
  container: {
    backgroundColor: Colors.MAIN,
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
    ...Buttons.smallRounded,
  },
});
