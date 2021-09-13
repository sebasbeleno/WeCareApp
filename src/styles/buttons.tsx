import * as Colors from './colors';

export const base = {
  backgroundColor: Colors.POSITIVE_BUTTON,
};

export const small = {
  paddingHorizontal: 10,
  paddingVertical: 12,
  width: 'auto',
  minWidth: 120,
};

export const rounded = {
  borderRadius: 10,
};

export const smallRounded = {
  ...base,
  ...small,
  ...rounded,
};
