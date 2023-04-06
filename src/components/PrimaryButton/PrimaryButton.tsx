import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import MyText from '../shared/MyText';

interface BUTTON_PROPS {
  label: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<BUTTON_PROPS> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
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
  },
  buttonText: {
    color: colors.extra_extra_light_gray,
    paddingVertical: spacing[7],
    paddingHorizontal: spacing[11],
    fontSize: spacing[14],
  },
});
