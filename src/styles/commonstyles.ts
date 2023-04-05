import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';

export const commonStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
    paddingHorizontal: spacing[10],
  },
});
