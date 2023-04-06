import {Text, TextInput, TextInputProps, View} from 'react-native';
import React, {ForwardedRef, forwardRef, useState} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';
import {ErrorMessage, useFormikContext} from 'formik';
import {FORM_VALUES} from '../../../types';
import MyText from '../MyText';
import {commonStyles} from '../../../styles/commonstyles';

interface InputProps extends TextInputProps {
  label: string;
  name: string;
}

const CustomInput = forwardRef<TextInput, InputProps>(
  ({label, name, ...otherProps}, ref: ForwardedRef<TextInput> | undefined) => {
    // component state
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // formik staff
    const {handleChange, values, setFieldTouched} =
      useFormikContext<FORM_VALUES>();

    return (
      <View style={styles.inputContainer}>
        <MyText
          style={values?.[name] ? styles.focusedLabelStyle : styles.labelStyle}>
          {label}
        </MyText>
        <TextInput
          cursorColor={colors.blue}
          style={[
            styles.inputStyle,
            commonStyles.regularText,
            isFocused && styles.focusedStyle,
          ]}
          onChangeText={handleChange(name)}
          value={values?.[name]}
          onBlur={() => {
            setFieldTouched(name);
            setIsFocused(false);
          }}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          {...otherProps}
        />
        {/* error block */}
        <View style={styles.errorContainer}>
          <ErrorMessage
            render={text => <Text style={styles.errorText}>{text}</Text>}
            name={name}
          />
        </View>
      </View>
    );
  },
);

export default CustomInput;

const styles = ScaledSheet.create({
  inputContainer: {
    position: 'relative',
    marginVertical: spacing[5],
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    paddingVertical: spacing[2],
    paddingHorizontal: 0,
    fontSize: spacing[14],
    color: colors.black,
  },
  focusedStyle: {
    borderBottomColor: colors.blue,
  },
  labelStyle: {
    position: 'absolute',
    left: 0,
    top: spacing[4],
    fontSize: spacing[15],
    color: colors.light_gray,
  },
  focusedLabelStyle: {
    position: 'absolute',
    left: 0,
    top: -moderateScale(12),
    fontSize: spacing[13],
    color: colors.dark_gray,
  },
  errorContainer: {
    height: spacing[13],
  },
  errorText: {
    color: colors.red,
    fontSize: spacing[10],
  },
});
