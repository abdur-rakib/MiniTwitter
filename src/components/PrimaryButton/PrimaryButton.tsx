import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import MyText from '../shared/MyText';

interface BUTTON_PROPS {
  label: string;
  onPress: () => void;
  disabled: boolean;
}

const PrimaryButton: React.FC<BUTTON_PROPS> = ({label, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, disabled && styles.disabledButtonStyle]}>
      <MyText type="Medium" style={styles.buttonText}>
        {label}
      </MyText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = ScaledSheet.create({
  buttonContainer: {
    borderRadius: spacing[2],
    backgroundColor: colors.blue,
    paddingVertical: spacing[5],
    paddingHorizontal: spacing[10],
  },
  disabledButtonStyle: {
    backgroundColor: colors.dark_light,
  },
  buttonText: {
    color: colors.extra_extra_light_gray,
    fontSize: spacing[14],
  },
});
