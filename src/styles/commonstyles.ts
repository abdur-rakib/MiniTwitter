import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';

export const commonStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
    paddingHorizontal: spacing[12],
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: colors.extra_light_gray,
    height: spacing[40],
    backgroundColor: colors.extra_extra_light_gray,
    paddingHorizontal: spacing[12],
    position: 'relative',
    elevation: 0,
  },
  // text st
  boldText: {
    fontFamily: 'HelveticaNeue-Bold',
  },
  mediumText: {
    fontFamily: 'HelveticaNeue-Medium',
  },
  regularText: {
    fontFamily: 'HelveticaNeue-Light',
  },
  lightText: {
    fontFamily: 'HelveticaNeue-Light',
  },
});
