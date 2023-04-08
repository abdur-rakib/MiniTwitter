import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import {AVATAR_URL} from '../../../config/urls';
import {getLoggedInUserId} from '../../../utils/commonFunctions';
import {useSelector} from 'react-redux';
import {userSelector} from '../../../redux/user/userSlice';

interface HeaderProps {
  toggle?: boolean;
}

const CustomHeader: React.FC<HeaderProps> = ({toggle}) => {
  // navigation staff
  const navigation: DrawerNavigationProp<ParamListBase, 'Home' | 'Profile'> =
    useNavigation();

  // redux
  const {token} = useSelector(userSelector);
  return (
    <View style={styles.headerContainer}>
      {toggle && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: `${AVATAR_URL}${getLoggedInUserId(token)}.jpg`,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      )}
      <FastImage
        style={styles.iconStyle}
        source={require('../../../assets/icons/twitter.png')}
        resizeMode={FastImage.resizeMode.contain}
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
