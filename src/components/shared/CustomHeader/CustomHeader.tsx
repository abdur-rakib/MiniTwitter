import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

interface HeaderProps {
  toggle?: boolean;
}

const CustomHeader: React.FC<HeaderProps> = ({toggle}) => {
  // navigation staff
  const navigation: DrawerNavigationProp<ParamListBase, 'Home' | 'Profile'> =
    useNavigation();
  return (
    <View style={styles.headerContainer}>
      {toggle && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/user.jpg')}
          />
        </TouchableOpacity>
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: colors.extra_light_gray,
    height: spacing[40],
    backgroundColor: colors.extra_extra_light_gray,
    paddingHorizontal: spacing[10],
    position: 'relative',
  },
  iconStyle: {
    height: spacing[32],
    width: spacing[32],
    position: 'absolute',
    left: '50%',
  },
  imageContainer: {
    zIndex: 9999,
  },
  image: {
    height: spacing[26],
    width: spacing[26],
    borderRadius: spacing[32],
  },
});
