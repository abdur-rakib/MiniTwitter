import {Image, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.iconStyle}
        source={require('../../../assets/icons/twitter.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default CustomHeader;

const styles = ScaledSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.extra_light_gray,
    height: spacing[40],
    backgroundColor: colors.extra_extra_light_gray,
  },
  iconStyle: {
    height: spacing[40],
    width: spacing[40],
  },
});
