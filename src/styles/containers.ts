import {ViewStyle} from 'react-native';
import * as Colors from './colors';

type orientation = 'buttonContainer' | 'spaceBetween';
export const fullSize: Record<orientation, ViewStyle> = {
  buttonContainer: {
    backgroundColor: Colors.secondary.brand,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    backgroundColor: Colors.secondary.brand,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

type textType = 'title';
export const text: Record<textType, ViewStyle> = {
  title: {
    marginVertical: 40,
  },
};
