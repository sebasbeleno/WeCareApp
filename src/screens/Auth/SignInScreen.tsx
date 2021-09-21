import React from 'react';
import {Layout, Text, Input} from '@ui-kitten/components';
import {
  Colors,
  Containers,
  Typography,
  Forms,
  Buttons,
  Sizing,
} from '../../styles';
import {StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export const SingInScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Layout style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.HeaderOne}>Bienvenido de vuelta,</Text>
        <Text style={styles.headerText}>te extrañamos</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="alguien@ejemplo.com"
          onChangeText={nextValue => setEmail(nextValue)}
          style={styles.textInput}
        />
        <Input
          placeholder="******"
          onChangeText={nextValue => setPassword(nextValue)}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableHighlight>
        </View>
        <Text>¿Ya tienes una cuenta? Ingresar</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Containers.fullSize.spaceBetween,
  },
  textContainer: {
    ...Containers.text.title,
    textAlign: 'left',
    width: Sizing.relative.w100,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  formContainer: {
    ...Containers.text.title,
    width: Sizing.relative.w100,
    paddingHorizontal: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  HeaderOne: {
    ...Typography.bold.x60,
    color: Colors.primary.brand,
  },
  headerText: {
    ...Typography.bold.x60,
    color: Colors.primary.brand,
    fontWeight: 'normal',
  },
  textInput: {
    ...Forms.input.primary,
  },
  buttonText: {
    ...Typography.bold.x30,
    color: Colors.acent.s600,
  },
  button: {
    ...Buttons.circular.primary,
    width: Sizing.relative.w100,
    height: Sizing.layout.x50,
  },
  buttonContainer: {
    paddingVertical: Sizing.x20,
  },
});
