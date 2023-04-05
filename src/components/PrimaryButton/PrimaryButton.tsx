import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';

interface BUTTON_PROPS {
  label: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<BUTTON_PROPS> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = ScaledSheet.create({
  buttonContainer: {
    borderRadius: spacing[2],
    backgroundColor: colors.blue,
  },
  buttonText: {
    color: colors.extra_extra_light_gray,
    paddingVertical: spacing[7],
    paddingHorizontal: spacing[11],
    fontSize: spacing[14],
  },
});
