import {TouchableOpacity} from 'react-native';
import React from 'react';
import MyText from '../shared/MyText';
import {spacing} from '../../theme/spacing';
import {colors} from '../../theme/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {capitalizeFirstCharacter} from '../../utils/commonFunctions';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled: boolean;
  following?: boolean | undefined;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled,
  following,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        disabled && styles.disabledButtonStyle,
        !following && styles.followButtonStyle,
      ]}>
      <MyText
        type="Bold"
        style={{
          color: following ? colors.black : colors.extra_extra_light_gray,
        }}>
        {capitalizeFirstCharacter(label)}
      </MyText>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = ScaledSheet.create({
  buttonContainer: {
    borderWidth: 0.8,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[12],
    borderRadius: spacing[14],
    borderColor: colors.dark_light,
  },
  disabledButtonStyle: {
    backgroundColor: colors.dark_light,
  },
  followButtonStyle: {
    backgroundColor: colors.black,
  },
  buttonText: {
    color: colors.black,
  },
  followButtonText: {
    color: colors.extra_extra_light_gray,
  },
  followTextStyle: {
    color: colors.extra_extra_light_gray,
  },
});
