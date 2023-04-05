import {Text, TextInput, View} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';

interface INPUT_PROPS {
  label: string;
}

const CustomInput: React.FC<INPUT_PROPS> = (
  {label, ...otherProps},
  ref: any,
) => {
  // component state
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        cursorColor={colors.blue}
        style={[styles.inputStyle, focused && styles.focusedStyle]}
        placeholder={label}
        ref={ref}
        placeholderTextColor={colors.dark_gray}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
      />
    </View>
  );
};

export default forwardRef(CustomInput);

const styles = ScaledSheet.create({
  inputContainer: {
    marginVertical: spacing[6],
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dark_gray,
    padding: 0,
    fontSize: spacing[14],
    fontWeight: '300',
  },
  focusedStyle: {
    borderBottomColor: colors.blue,
  },
  labelStyle: {
    fontSize: spacing[14],
    color: colors.dark_gray,
    fontWeight: '300',
    paddingVertical: spacing[6],
  },
});
